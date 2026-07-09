import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './Slice'
import productReducer from './ProductSlice'

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    },
})

export default Store;