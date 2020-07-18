// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (object, submit) =>{
    const [data, setData] = useState(object)

    const handleChange = e =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        submit(object)
        setData(object)
    }

    return [data, handleChange, handleSubmit]
}