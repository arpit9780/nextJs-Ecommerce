
import { appRoute } from '@/constant';
import { createProduct, getProductById, updateProduct } from '@/redux/slicess/admin/productSlice';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { FaImage } from 'react-icons/fa'

const ProductForm = () => {
  const dispatch = useDispatch()
  const { query, push } = useRouter()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

  const { product, error, status } = useSelector((state) => {
    return {
      status: state?.RootReducer?.ProductSlice?.status,
      error: state?.RootReducer?.ProductSlice?.error,
      product: state?.RootReducer?.ProductSlice?.oneProduct,
    }
  })

  useEffect(() => {
    if (product?.post !== undefined) {
      setValue("title", product?.post?.title)
      setValue("price", product?.post?.price)
      setValue("description", product?.post?.description)
    }

    if (status === "Failed") {
      if (error.status === 404) {
        setLoading(false)
        toast.error("Not Found")
      }
      else {
        setLoading(false)
        console.log(9865,error)
        toast.error(error.data.error)
      }
    }
    else if (status === "Success") {
      setLoading(false)
      toast.success(product?.success ? product?.success : product?.data?.message)
    }

  }, [product])

  useEffect(() => {
    if (query.id !== undefined) {
      dispatch(getProductById(query.id))
    }
    else {
      reset()
    }
  }, [query])


  const onSubmit = data => {
    setLoading(true)

    if (query.id !== undefined) {
      console.log("update", data)
      const body = [query.id, data]
      dispatch(updateProduct(body))
    }
    else {
      console.log("add", data)
      dispatch(createProduct(data))
      reset()
    }
  }

  return (
    <>
      <div className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-item-center h-100'>
            <div className='col-xl-5'>
              <div className='card rounded-3 text-black'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='card-body p-md-5 mx-md-4'>
                      {
                        query?.id ? <>
                          <h2>Product Update</h2>
                          <div className='form-outline mb-4'>
                            <img src={product?.post?.image} height="100px" width="auto" />
                          </div>
                        </>
                          : <h2>Product Detail's</h2>
                      }
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-outline mb-4'>
                          <TextField
                            name='title'
                            label="Title"
                            variant="outlined"
                            {...register("title", { required: true })}
                            fullWidth
                            defaultValue="Title"
                            error={errors.title ? true : false}
                          />
                          <Typography variant="inherit" color="textSecondary">
                            {errors.title && <span>This field is required</span>}
                          </Typography>
                        </div>
                        <div className='form-outline mb-4'>
                          <TextField
                            name='price'
                            label="Price"
                            variant="outlined"
                            type="number"
                            {...register("price", { required: true, max: 10, min: 1})}
                            fullWidth
                            defaultValue="10"
                            error={errors.price ? true : false}
                          />
                          <Typography variant="inherit" color="textSecondary">
                           
                            {errors.price?.type === 'required' && <span>This field is required</span>}
                            {errors.price?.type === 'min' && <span>You must fulfill the minimum price 1rs </span>}
                            {errors.price?.type === 'max' && <span>You must fulfill the maximum price 10rs </span>}
                          </Typography>
                        </div>
                        <div className='form-outline mb-4'>
                          <TextField
                            name='description'
                            label="Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            {...register("description", { required: true })}
                            fullWidth
                            defaultValue="Description"
                            error={errors.description ? true : false}
                          />

                          <Typography variant="inherit" color="textSecondary">
                            {errors.description && <span>This field is required</span>}
                          </Typography>
                        </div>
                        {
                          query?.id ?
                            <div className='form-outline mb-4'>
                              <TextField
                                name='avatarFile'
                                id="file-input"
                                type="file"
                                variant="outlined"
                                {...register("avatarFile", { required: true })}
                                fullWidth
                                error={errors.avatarFile ? true : false}
                              />
                              <Typography variant="inherit" color="textSecondary">
                                {errors.avatarFile && <span>This field is required</span>}
                              </Typography>

                            </div>
                            :
                            <div className='form-outline mb-4'>
                              <TextField
                                name='avatarFile'
                                type="file"
                                variant="outlined"
                                {...register("avatarFile", { required: true })}
                                fullWidth
                                error={errors.avatarFile ? true : false}
                              />
                              <Typography variant="inherit" color="textSecondary">
                                {errors.avatarFile && <span>This field is required</span>}
                              </Typography>
                            </div>

                        }
                        <div className="text-center pt-1 mb-5 pb-1">
                          <Button
                            type='submit'
                            ariant="contained"
                            disabled={loading ? true : false}
                          >
                            {loading ? <BarLoader color="#ffd706" /> : "Submit"}
                          </Button>
                          <Button
                            ariant="contained"
                            onClick={() => push(appRoute.SHOP)}
                          >
                            Back
                          </Button>
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

export default ProductForm