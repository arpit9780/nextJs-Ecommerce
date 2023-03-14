import { combineReducers } from "redux";
import  ProductSlice  from "./slicess/admin/productSlice";
import adminSlice from "./slicess/admin/adminSlice";
import authSlice from "./slicess/commonSlice/authSlice";
import ShoppingSlice from "./slicess/user/shopingSlice";

const RootReducer = combineReducers({
    ProductSlice,
    authSlice,
    ShoppingSlice,
    adminSlice, 
}) 

export default RootReducer;