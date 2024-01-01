import * as yup from "yup"

export const validateForCreate = yup.object().shape({
    name: yup.string().required("Обязательно"),
    price: yup.number().required("Обязательно"),
    desc: yup.string().required("Обязательно"),
    type: yup.number().required("Обязательно")
})

export const validName = yup.object().shape({
    name: yup.string().min(3,"минимум 3").required("обязательно")
})

