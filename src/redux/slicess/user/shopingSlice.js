import Instance from "@/config/Instance"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    allCards:[],
    addToCard: [],
    cart:[],
    error: "",
    status: '',
    addCWA: []

}

export const addCart = createAsyncThunk(
    "AddCart", async (body, { fulfillWithValue, rejectWithValue }) => {
        try {
            const res = await Instance.post("/cart", body)
            return fulfillWithValue(res)
        } catch (error) {
            return rejectWithValue(error?.response)
        }
    }
)

export const getToCard = createAsyncThunk(
    "GetCard", async () => {
        try {
            const res = await Instance.get("/cart/get")
            return res
        } catch (error) {
            return error.response
        }
    }
)

export const deleteCard = createAsyncThunk(
    "DeleteCard", async (payload) => {
        try {
            const res = await Instance.delete("/cart/delete", {
                params: payload
            })
            return res.data
        } catch (error) {
            return error.response
        }
    }
)

export const incrementCard = createAsyncThunk(
    "IncrementCard", async (body) => {
        try {
            const res = await Instance.post("/cart/increment", body)
            console.log("IncrementCard try", res)
            return res.data
        } catch (error) {
            console.log("IncrementCard catch", error)
            return error.response
        }
    }
)


const ShoppingSlice = createSlice({
    name: "ShoppingSlice",
    initialState,
    reducers: {
        addItem(state, action) {
            state.addCWA = action.payload
        }
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(addCart.pending, (state, action) => {
                    state.status = "Pending"
                })
                .addCase(addCart.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.addToCard = action.payload
                })
                .addCase(addCart.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(getToCard.pending, (state, action) => {
                    state.addCWA = []
                    state.status = "Pending"
                })
                .addCase(getToCard.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.allCards = action.payload
                })
                .addCase(getToCard.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(deleteCard.pending, (state, action) => {
                    state.status = "Pending"
                })
                .addCase(deleteCard.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.cart = action.payload
                })
                .addCase(deleteCard.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(incrementCard.pending, (state, action) => {
                    state.status = "Pending"
                })
                .addCase(incrementCard.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.cart = action.payload
                })
                .addCase(incrementCard.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })
        }
})

export const { addItem } = ShoppingSlice.actions
export default ShoppingSlice.reducer