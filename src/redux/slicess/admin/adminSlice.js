import Instance from "@/config/Instance"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: [],
    status: " ",
    admin: [],
    users: [],
    userActions: [],
    adminActions: []
}

export const getAdminProfile = createAsyncThunk(
    "GetAdminProfile", async () => {
        try {
            const res = await Instance.get("/getAdminProfile")
            return res.data
        } catch (error) {
            return error.response
        }
    }
)
export const getAllUsers = createAsyncThunk(
    "GetAllUsers", async () => {
        try {
            const res = await Instance.get("/getALLAuth")
            return res.data
        } catch (error) {
            return error.response
        }
    }
)

export const makeAdmin = createAsyncThunk(
    "MakeAdmin", async (id) => {
        try {
            const res = await Instance.put(`/madeAdmin/${id}`)
            return res.data
        } catch (error) {
            return error.response
        }
    }
)

export const makeUser = createAsyncThunk(
    "MakeUser", async (id) => {
        try {
            const res = await Instance.put(`/madeUser/${id}`)
            return res.data
        } catch (error) {
            return error.response
        }
    }
)

export const blockUser = createAsyncThunk(
    "BlockUser", async (body) => {
        try {
            const res = await Instance.put(`/blockAuth/${body[0]}`, body[1])
            return res.data
        } catch (error) {
            return error.response
        }
    }
)


export const unBlockUser = createAsyncThunk(
    "UnBlockUser", async (id) => {
        try {
            const res = await Instance.put(`/unBlockAuth/${id}`)
            return res.data
        } catch (error) {
            return error.response
        }
    }
)

export const updateAdminProfile = createAsyncThunk(
    "UpdateAdminProfile", async (data) => {
        try {
            const res = await Instance.put(`/updateAdminProfile/${data[0]}`,data[1])
            return res
        } catch (error) {
            return error.response
        }
    }
)

export const deleteAdminProfile = createAsyncThunk(
    "DeleteAdminProfile", async (id) => {
        try {
            const res = await Instance.delete(`/deleteAdminProfile/${id}`)
            return res
        } catch (error) {
            return error.response
        }
    }
)

const adminSlice = createSlice({
    name: "AdminSlice",
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(getAdminProfile.pending, (state) => {
                    state.status = "Pending"
                    
                })
                .addCase(getAdminProfile.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.admin = action.payload
                })
                .addCase(getAdminProfile.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(getAllUsers.pending, (state) => {
                    state.status = "Pending"
                })
                .addCase(getAllUsers.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.users = action.payload
                })
                .addCase(getAllUsers.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(makeAdmin.pending, (state) => {
                    state.status = "Pending"
                })
                .addCase(makeAdmin.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.userActions = action.payload
                })
                .addCase(makeAdmin.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(makeUser.pending, (state) => {
                    state.status = "Pending"
                })
                .addCase(makeUser.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.userActions = action.payload
                })
                .addCase(makeUser.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(blockUser.pending, (state) => {
                    state.status = "Pending"
                })
                .addCase(blockUser.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.userActions = action.payload
                })
                .addCase(blockUser.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(unBlockUser.pending, (state) => {
                    state.status = "Pending"
                })
                .addCase(unBlockUser.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.userActions = action.payload
                })
                .addCase(unBlockUser.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(updateAdminProfile.pending, (state) => {
                    state.status = "Pending"
                    state.adminActions = []
                })
                .addCase(updateAdminProfile.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.adminActions = action.payload
                })
                .addCase(updateAdminProfile.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })
                
                .addCase(deleteAdminProfile.pending, (state) => {
                    state.status = "Pending"
                    state.adminActions = []
                })
                .addCase(deleteAdminProfile.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.adminActions = action.payload
                })
                .addCase(deleteAdminProfile.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })
        }
})
export default adminSlice.reducer