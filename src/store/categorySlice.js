import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, deleteCategoryApi, changeCategoryApi } from "../api/categoryApi";

export const showCategories = createAsyncThunk(
    "category/showCategory",
    async (_, { dispatch }) => {
        try {
            const res = await getCategories()
            dispatch(allCategory(res.data))
        } catch (error) {
            console.log(error)
        }
    }
)

export const removeCategory = createAsyncThunk(
    "category/removeCategory",
    async (id, { dispatch }) => {
        try {
            const res = await deleteCategoryApi(id)
            dispatch(deleteCategory({ id }))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
)

export const putCategory = createAsyncThunk(
    "category/putCategory",
    async (obj, { dispatch }) => {
        try {
            const res = await changeCategoryApi(obj.id, obj.text)
            dispatch(changeCategory(obj))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
)


const categorySlice = createSlice({
    name: "category",
    initialState: [],
    reducers: {
        allCategory(state, action) {
            return [...action.payload]
        },
        deleteCategory(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
        changeCategory(state, action) {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, title: action.payload.text };
                }
                return item;
            });
        }
    }
})

export const { allCategory, deleteCategory, changeCategory } = categorySlice.actions
export default categorySlice.reducer