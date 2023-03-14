import { appRoute } from '@/constant';
import { registerUser } from '@/redux/slicess/commonSlice/authSlice';
import { signupSchema } from '@/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Signup = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const { status, error, user } = useSelector((state) => {
        return {
            status: state?.RootReducer?.authSlice?.status,
            error: state?.RootReducer?.authSlice?.error,
            user: state?.RootReducer?.authSlice?.user
        }
    })
    console.log("signup",status,error,user)
    useEffect(() => {
        if (status == "Failed") {
            if(error.status === 404)
            {
                toast.error("Not Found")
            }
            else{
                toast.error(error.data.error)
            }
        }
        else if (status == "Success") {
            toast.success(user?.data?.message)
                router.push(appRoute.SIGNIN)
        }
    }, [error,user])

    const onSubmit = data => {
        dispatch(registerUser(data))
    }

    return (
        <>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form onSubmit={handleSubmit(onSubmit)} className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField
                                                        label="Name"
                                                        variant="outlined"
                                                        {...register("firstName", { required: true })}
                                                        fullWidth
                                                        error={errors.firstName ? true : false}
                                                    />
                                                    <Typography variant="inherit" color="textSecondary">
                                                        {errors.firstName?.message}
                                                    </Typography>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField
                                                        label="Email"
                                                        variant="outlined"
                                                        {...register("email", { required: true })}
                                                        fullWidth
                                                        error={errors.email ? true : false}
                                                    />
                                                    <Typography variant="inherit" color="textSecondary">
                                                        {errors.email?.message}
                                                    </Typography></div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField
                                                        label="Password"
                                                        variant="outlined"
                                                        type="password"
                                                        {...register("password", { required: true })}
                                                        fullWidth
                                                        error={errors.password ? true : false}
                                                    />
                                                    <Typography variant="inherit" color="textSecondary">
                                                        {errors.password?.message}
                                                    </Typography>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField
                                                        label="Confirm Password"
                                                        variant="outlined"
                                                        type="password"
                                                        {...register("cPassword", { required: true })}
                                                        fullWidth
                                                        error={errors.cPassword ? true : false}
                                                    />
                                                    <Typography variant="inherit" color="textSecondary">
                                                        {errors.cPassword?.message}
                                                    </Typography>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <Button
                                                    type='submit'
                                                    variant="contained"
                                                    disabled={status === 'Pending' ? true : false}
                                                >
                                                    {status === 'Pending' ? <BarLoader color="#ffd706" /> : "Submit"}
                                                </Button> </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />
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

export default Signup