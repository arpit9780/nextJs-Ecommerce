import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputField from '@/component/inputFile/InputField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogActions } from '@mui/material'
import Typography from '@mui/material/Typography';
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import { deleteAdminProfile, updateAdminProfile } from '@/redux/slicess/admin/adminSlice';
import { changePasswordAuth } from '@/redux/slicess/commonSlice/authSlice';
import { toast } from 'react-toastify';
import { BarLoader } from 'react-spinners';

export const Dailogs = ({ open, isField, isRemove, handleClose }) => {
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const { profile, massageSuccess, massageError } = useSelector((state) => {
    return {
      profile: state?.RootReducer?.adminSlice?.admin?.Admin?.[0],
      massageSuccess: state?.RootReducer?.adminSlice?.adminActions,
      massageError: state?.RootReducer?.adminSlice?.error,
    }
  })
  console.log(8567,massageSuccess)

  useEffect(() => {
   if(massageSuccess?.data?.message) {
    toast.success(massageSuccess?.data?.message)
    setLoading(false)
   }
   else if(massageError?.error){
     toast.error(massageError?.error)
     setLoading(false)
   }
  },[massageSuccess])
  useEffect(() => {
    setValue("email", profile?.email)
  }, [])

  const onSubmit = (data) => {
    const body = [profile?._id, data]
    setLoading(true)
    if (isField) {
      dispatch(updateAdminProfile(body))
    }
    else {
      dispatch(changePasswordAuth(data))
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{isRemove ? "Delete profile" : isField ? "Update admin detail's" : "Change password"}</DialogTitle>
        <DialogContent>
          {isRemove ?
            <>
              <DialogContentText id="alert-dialog-description">
                Are you sure you are remove
              </DialogContentText>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={() => { dispatch(deleteAdminProfile(profile?._id)) }} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </>
            :
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                register={{ ...register("email", { required: true }) }}
                label="Email"
                variant="standard"
                error={errors.email ? true : false}
                // defaultValue={isField ? profile?.email : profile?.email}
                disabled={isField ? false : true}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email && <span>This field is required</span>}
              </Typography>

              <InputField
                register={{ ...register(isField ? 'firstName' : "password", { required: true }) }}
                label={isField ? "Name" : "Set Password"}
                variant="standard"
                error={isField ? errors.firstName ? true : false : errors.password ? true : false}
                defaultValue={isField ? profile?.firstName : null}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.firstName && <span>This field is required</span>}
              </Typography>

              <Box textAlign='center'>
                <Button onClick={handleClose} disabled={loading} >close</Button>
                <Button type='submit' disabled={loading}> {loading ? <BarLoader color="#ffd706" /> : "Submit"}</Button>
              </Box>
            </form>
          }
        </DialogContent>
      </Dialog>
    </>
  )
}
