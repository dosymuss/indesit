import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductApi, getAllProducts } from "../api/productApi";


export const showProducts = createAsyncThunk(
  "product/showProducts",
  async (_, { dispatch }) => {
    try {
      const res = await getAllProducts()
      dispatch(showAllProducts(res.data))
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async(id,{dispatch})=>{
    try {
      const res = await deleteProductApi(id)
      dispatch(removeProduct({id}))
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    showAllProducts(state, action) {
      return [...action.payload]
    },
    addProduct(state, action) {
      return [...state, action.payload]
    },
    removeProduct(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  }
})

export const { addProduct, removeProduct, showAllProducts } = productSlice.actions

export default productSlice.reducer