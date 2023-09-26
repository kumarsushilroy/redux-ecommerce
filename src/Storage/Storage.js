

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Storage/CartSlice'

const store = configureStore({

    reducer:{
        cart:cartReducer
    }
    
    
});

export default store;