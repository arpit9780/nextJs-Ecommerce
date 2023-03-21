import Instance from "@/config/Instance"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const authToken =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("authToken"))

const initialState = {
    product: [],
    oneProduct: [],
    addProduct:[],
    error: [],
    status: '',

}

export const getProduct = createAsyncThunk(
    "GetProduct", async () => {
        try {
            const res = await Instance.get("/dashGetProduct")
            return res.data
        } catch (error) {
            return error
        }
    }
)


export const createProduct = createAsyncThunk(
    "CreateProduct", async (body) => {
        const formData = new FormData();
        formData.append("title", body.title);
        formData.append("price", body.price);
        formData.append("description", body.description);
        formData.append("image", body?.avatarFile[0]);
        try {
            const res = await Instance.post("/post", formData)
            return res            
        } catch (error) {
            return error.response
        }
    }
)

export const getAdminProduct = createAsyncThunk(
    "GetAdminProduct", async () => {
        try {
            const res = await Instance.get("/get")
            return res.data
        } catch (error) {
            return error
        }
    }
)

export const getProductById = createAsyncThunk(
    "GetProductById", async (id) => {
        try {
            const res = await Instance.get(`/get/${id}`)
            return res.data
        } catch (error) {
            return error
        }
    }
)

export const updateProduct = createAsyncThunk(
    "UpdateProduct", async (body) => {
        console.log("UpdateProduct", body)
        const formData = new FormData();
        formData.append("title", body[1].title);
        formData.append("price", body[1].price);
        formData.append("description", body[1].description);
        formData.append("image", body[1]?.avatarFile[0]);
        try {
            const res = await Instance.put(`/update/${body[0]}`, formData)
            return res.data
        } catch (error) {
            return error
        }
    }
)

export const deleteProduct = createAsyncThunk(
    "DeleteProduct", async (id) => {
        try {
            const res = await Instance.delete(`/delete/${id}`)
            console.log("deleteProduct try", res)
            return res
        } catch (error) {
            console.log("deleteProduct catch", error)
            return error
        }
    }
)

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(getProduct.pending, (state, action) => {
                    state.status = "Pending"
                    
                })
                .addCase(getProduct.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.product = action.payload

                })
                .addCase(getProduct.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(createProduct.pending, (state, action) => {
                    state.status = "Pending"
                    
                })
                .addCase(createProduct.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.oneProduct = action.payload
                })
                .addCase(createProduct.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(getAdminProduct.pending, (state, action) => {
                    // state.oneProduct = []
                    state.status = "Pending"
                })
                .addCase(getAdminProduct.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.product = action.payload

                })
                .addCase(getAdminProduct.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(getProductById.pending, (state, action) => {
                    state.status = "Pending"
                    state.oneProduct = []
                })
                .addCase(getProductById.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.oneProduct = action.payload
                })
                .addCase(getProductById.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(updateProduct.pending, (state, action) => {
                    state.status = "Pending"
                    state.oneProduct = []
                })
                .addCase(updateProduct.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.oneProduct = action.payload
                })
                .addCase(updateProduct.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(deleteProduct.pending, (state, action) => {
                    state.status = "Pending"
                    state.oneProduct = []
                })
                .addCase(deleteProduct.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.oneProduct = action.payload
                })
                .addCase(deleteProduct.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

        }
})

export default ProductSlice.reducer