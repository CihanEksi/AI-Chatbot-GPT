import * as yup from 'yup'
const { VITE_API_URL } = import.meta.env

const schema = yup.object().shape({
    VITE_API_URL: yup.string().required()
})

schema.validate({
    VITE_API_URL: VITE_API_URL
}).catch(err => {
    throw new Error(err.errors)
})

const config = {
    API_URL: VITE_API_URL
}

export default config