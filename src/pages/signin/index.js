import { authLogin } from '@/redux/slicess/commonSlice/authSlice';
import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { loginSchema } from '@/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import logo from '../../assets/logo/yuva-logo.png'
import { useRouter } from 'next/router';
import { appRoute } from '@/constant';


const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const dispatch = useDispatch()
    const router = useRouter()

    const { user, status, error } = useSelector((state) => {
        return {
            status: state?.RootReducer?.authSlice?.status,
            error: state?.RootReducer?.authSlice?.error,
            user: state?.RootReducer?.authSlice?.user,
        }
    })
    // useEffect(() => {
    //     if (status == "Failed") {
    //         if(error.status === 404)
    //         {
    //             toast.error("Not Found")
    //         }
    //         else{
    //             toast.error(error.data.error)
    //         }
    //     }
    //     else if (status == "Success") {
    //         toast.success(user?.data?.success)
    //             router.push(appRoute.SIGNIN)
    //     }
    // }, [error,user])
    const onSubmit = (data) => {
        dispatch(authLogin(data))
    };
    return (
        <>
            <div className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-5">
                            <div className="card rounded-3 text-black">
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src={logo.src}
                                                    style={{ width: "185px" }} alt="logo" />
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <h2 style={{ textAlign: "center" }}>Sign in</h2>
                                                <h4 style={{ textAlign: "center" }}>Use your Account</h4>

                                                <div className="form-outline mb-4">
                                                    <TextField
                                                        label="Email"
                                                        type="text"
                                                        variant="outlined"
                                                        {...register("email", { required: true })}
                                                        fullWidth
                                                        error={errors.email ? true : false}
                                                    />
                                                    <Typography variant="inherit" color="textSecondary">
                                                        {errors.email?.message}
                                                    </Typography>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <TextField
                                                        label="Password"
                                                        type='password'
                                                        variant="outlined"
                                                        {...register("password", { required: true })}
                                                        fullWidth
                                                        error={errors.password ? true : false}
                                                    />
                                                    <Typography variant="inherit" color="textSecondary">
                                                        {errors.password?.message}
                                                    </Typography>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <Button
                                                        type='submit'
                                                        variant="contained"
                                                        fullWidth
                                                        disabled={status === 'Pending' ? true : false}
                                                    >
                                                        {status === 'Pending' ? <BarLoader color="#ffd706" /> : "Submit"}
                                                    </Button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => { router.push(appRoute.SIGNUP) }}>Create new</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signin