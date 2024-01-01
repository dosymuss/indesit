import axios from "axios"

export const authLogin = async () => {
    try {
        const res = await axios.post("http://206.189.103.20:8000/login/", {
            username: "admin",
            password: "1234abQ!"
        })
        localStorage.setItem("tokens", JSON.stringify(res.data.tokens))
        return res
    } catch (error) {
        throw error
    }
}







