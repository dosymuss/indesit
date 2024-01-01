import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { deleteOrder, getAllOrders } from "../api/orders"

export const getAllAppli = createAsyncThunk(
    "application/getAllOrders",
    async(_,{dispatch})=>{
        try {
            const res = await getAllOrders()
            dispatch(allAppli(res.data))
        } catch (error) {
            console.log(error)
        }
    }
)
export const deleteAppli = createAsyncThunk(
    "application/delteAppli",
    async(id,{dispatch})=>{
        try {
            const res = await deleteOrder(id)
            dispatch(removeAppli({id}))
        } catch (error) {
            console.log(error)
        }
    }
)

const applicationSlice = createSlice({
    name:"application",
    initialState:[],
    reducers:{
        allAppli(state,action){
            return [...action.payload]
        },
        showAllApli(state,action){
            return [...action.payload]
        },
        removeAppli(state,action){
            return state.filter(item=>item.id!==action.payload.id)
        }
    }
})

export const {allAppli,removeAppli,showAllApli} = applicationSlice.actions

export default applicationSlice.reducer