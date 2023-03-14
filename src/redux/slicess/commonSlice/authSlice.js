import Instance from "@/config/Instance"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const authToken =
    typeof window !== "undefined" && JSON.parse( localStorage.getItem("authToken"))

const initialState = {
    role:authToken?.success,
    Token:authToken?.token,
    user:[],
    error:"",
    status: '',
}

export const authLogin = createAsyncThunk(
    "AuthLogin", async (body, { fulfillWithValue, rejectWithValue }) => {
        try {
            const res = await Instance.post("/login", body)
            console.log("7878Actionres", res)
            return fulfillWithValue(res)
        } catch (error) {
            console.log("Actionerror", error)
            return rejectWithValue(error?.response)
        }
    }
)

export const registerUser = createAsyncThunk(
    "Register", async (body,{fulfillWithValue,rejectWithValue}) => {
        try {
            const res = await Instance.post("/register", body)
            console.log(res)
            return fulfillWithValue( res)
        } catch (error) {
            console.log(error.response)
            return rejectWithValue( error?.response)
        }
    }
)

export const changePasswordAuth = createAsyncThunk(
    "ChangePasswordAuth", async (body) => {
        try {
            const res = await Instance.post("/changePassword", body)
            return res
        } catch (error) {
            return error?.response
        }
    }
)



const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        logoutAuth(state, action) {
            localStorage.removeItem("authToken")
            state.Token = null
            state.role = null
            state.user = null
            state.error = null
        }
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(authLogin.pending, (state, action) => {
                    state.status = "Pending"
                })
                .addCase(authLogin.fulfilled, (state, action) => {
                    state.status = "Success"
                    localStorage.setItem("authToken", JSON.stringify(action.payload.data))
                    state.Token = action.payload.data.token
                    state.role = action.payload.data.success
                    state.user = action.payload
                })
                .addCase(authLogin.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(registerUser.pending, (state, action) => {
                    state.status = "Pending"
                })
                .addCase(registerUser.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.user = action.payload
                })
                .addCase(registerUser.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })

                .addCase(changePasswordAuth.pending, (state, action) => {
                    state.status = "Pending"
                })
                .addCase(changePasswordAuth.fulfilled, (state, action) => {
                    state.status = "Success"
                    state.user = action.payload
                    localStorage.removeItem("authToken")
                    state.Token = null
                    state.role = null
                    state.error = null
                })
                .addCase(changePasswordAuth.rejected, (state, action) => {
                    state.status = "Failed"
                    state.error = action.payload
                })
        }

})

export const { logoutAuth } = AuthSlice.actions
export default AuthSlice.reducer