import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productSlice"
import applicationReducer from "./applicationSlice"
import categoryReducer from "./categorySlice"
import todoReducer from "./todoSlice"

export default configureStore({
    reducer: {
        product: productReducer,
        application: applicationReducer,
        category: categoryReducer,
        todo:todoReducer
    }
})







// reducer:{
//     product:productReducer,
//     application:applicationReducer,
//     category:categoryReducer
// }