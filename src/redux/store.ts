//create a redux store
import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";


export default configureStore ({
    reducer :{
        authReducer : authReducer
    }
})