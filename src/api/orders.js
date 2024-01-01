import { instanceWithToken } from "./productApi";


export const getAllOrders = async()=>{
try {
    const res = await instanceWithToken.get("owner/orders/")
    return res
} catch (error) {
    throw error
}
}
export const deleteOrder = async(id)=>{
    try {
        const res = await instanceWithToken.delete(`owner/orders/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}