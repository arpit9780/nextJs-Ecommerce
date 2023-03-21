import { authLogin } from '@/redux/slicess/commonSlice/authSlice';
import { Backdrop, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginSchema } from '@/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { appRoute } from '@/constant';
import { Col, Container, Row } from 'react-bootstrap';


const Signin = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const dispatch = useDispatch()
    const router = useRouter()

    const { user, status, token } = useSelector((state) => {
        return {
            status: state?.RootReducer?.authSlice?.status,
            user: state?.RootReducer?.authSlice?.user,
            token: state?.RootReducer?.authSlice?.Token
        }
    })
    useEffect(() => {
        if (token !== undefined && status == "SuccessLogin") {
            toast.success(user?.data?.success)
            router.push(appRoute.SHOPPING_CARD)
            setLoading(false)
        }else{
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }
       
    }, [status])

    const onSubmit = (data) => {
        setLoading(true)
        dispatch(authLogin(data))
    };
    return (
        <>
            <div className="gradient-form" style={{ backgroundColor: "#eee", height: "100%" }}>
                <Container style={{ height: "100%", padding: "10px 3rem" }}>
                    <Row className="login-box">
                        <Col xl={5}>
                            <div className="card">
                                <Row>
                                     <Col lg={12}>
                                        <div className="card-body ">
                                            <div className="text-center">
                                                {/* <img src={logo.src}
                                                    style={{ width: "185px" }} alt="logo" /> */}
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <h2 style={{ textAlign: "center" }}>Sign in</h2>
                                                <h4 style={{ textAlign: "center" }}>Use your Account</h4>

                                                <div
                                                    className="form-outline"
                                                    style={{ marginBottom: "25px" }}
                                                >
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

                                                <div className="form-outline" style={{ marginBottom: "25px" }}>
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

                                                <div className="submit-button" >
                                                    <Button
                                                        type='submit'
                                                        variant="contained"
                                                        fullWidth
                                                        disabled={loading ? true : false}
                                                    >
                                                        {loading ?
                                                            <Backdrop
                                                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                                open={loading}
                                                            >
                                                                <CircularProgress color="inherit" />
                                                            </Backdrop>
                                                            : "Submit"
                                                        }
                                                    </Button>
                                                </div>

                                                <div className="create-btn">
                                                    <p style={{marginBottom:"0px"}}>Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => { router.push(appRoute.SIGNUP) }}>Create new</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Signin