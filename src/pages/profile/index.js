import { getAdminProfile, getAllUsers } from '@/redux/slicess/admin/adminSlice';
import { Avatar, Badge, Grid, ListItemButton, ListItemIcon } from '@mui/material'
import { Box } from '@mui/system';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { CiCircleRemove } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { MdOutlinePassword } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { Dailogs } from '@/component/dailogFile/Dailogs';
import { toast } from 'react-toastify';
import { AllUsers } from './all-users';
import { useRouter } from 'next/router';
import { appRoute } from '@/constant';


const index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isField, setIsField] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  const { profile, adminAction, passwordMessage } = useSelector((state) => {
    return {
      profile: state?.RootReducer?.adminSlice?.admin?.Admin?.[0],
      adminAction: state?.RootReducer?.adminSlice?.adminActions,
      passwordMessage: state?.RootReducer?.authSlice?.user,
    }
  })

  useEffect(() => {
    dispatch(getAdminProfile())
    if (adminAction?.status === 200) {
      toast.success("Admin Updated Successfully")
      setIsOpen(false)
    }
  }, [adminAction])

  useEffect(() => {
    if (passwordMessage?.status === 200) {
      console.log(passwordMessage)
      toast.success(passwordMessage?.data?.success)
      setIsOpen(false)
    }
  }, [passwordMessage])



  const handleUpdateOpen = () => {
    setIsRemove(false)
    setIsField(true)
    setIsOpen(true);
  };

  const handlePasswordOpen = () => {
    setIsRemove(false)
    setIsField(false)
    setIsOpen(true)
  }

  const removeAdmin = () => {
    setIsRemove(true)
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='container'>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleUpdateOpen}>
                      <ListItemIcon>
                        <GrUpdate style={{ fontSize: "20px" }} />
                      </ListItemIcon>
                      <ListItemText primary="Update" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton onClick={handlePasswordOpen}>
                      <ListItemIcon>
                        <MdOutlinePassword style={{ fontSize: "25px", color: "black" }} />
                      </ListItemIcon>
                      <ListItemText primary="Change Password" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => { router.push(appRoute.ALL_USERS) }}>
                      <ListItemIcon>
                        <FaUsers style={{ fontSize: "25px", color: "black" }} />
                      </ListItemIcon>
                      <ListItemText primary="All users" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <BsChatDots style={{ fontSize: "25px", color: "black" }} />
                      </ListItemIcon>
                      <ListItemText primary="Chat" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <IoMdNotifications style={{ fontSize: "25px", color: "black" }} />
                      </ListItemIcon>
                      <ListItemText primary="Notification" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <AiFillSetting style={{ fontSize: "25px", color: "black" }} />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton onClick={removeAdmin}>
                      <ListItemIcon>
                        <CiCircleRemove style={{ fontSize: "25px", color: "#ff0000" }} />
                      </ListItemIcon>
                      <ListItemText primary="Remove" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            {profile ?
              <>
                <div className='profileCard'>

                  <Avatar alt="complex" className='profileAvatar' sx={{ width: 150, height: 150 }}
                    src="https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                  <Typography variant="h4" gutterBottom  className='profileName'>
                    {profile?.firstName}
                  </Typography>
                  
                  <Typography variant="body2" className='profileName'>
                    {profile?.email}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" className='profileName'>
                    {profile?._id}
                  </Typography>

                </div>
              </>
              :
              <Grid item xs>
                <RingLoader color="#6C757D" style={{ position: 'absolute', top: "40%", left: "35%" }} />
              </Grid>

            }
          </Grid>
          <Grid item xs={6} md={4}>

          </Grid>
        </Grid>
      </div>
      {isOpen ? <Dailogs open={isOpen} handleClose={handleClose} isField={isField} isRemove={isRemove} /> : null}
    </>
  )
}

export default index