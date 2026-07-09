import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async() => {
    const res = await fetch('https://dummyjson.com/products');
    const json = await res.json();
    return json.products
})

const initialState = {
    items: [],
    status: undefined,  
    error: null
}

const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded",
            state.items = action.payload
        })
    }
})

export default ProductSlice.reducer;
