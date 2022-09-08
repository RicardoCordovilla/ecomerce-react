import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(url, data)
            .then(res => {
                console.log(res.data.data.token)
                localStorage.setItem('token',res.data.data.token)
                navigate('/')
            })
            .catch(err => console.log(err))
            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIzLCJpYXQiOjE2NjI0Mjk0ODMsImV4cCI6MTY2NzYxMzQ4M30.1Pjm3X_yVAzfuMmB6k0T7jVCQqs4vFxFSyRTK-SdWJc"
        // console.log(data)
        // reset({ email:'',password:''})
    }

    const navigate=useNavigate()
    
    useEffect(()=>{
        const nombre=localStorage.getItem('nombre')
        console.log(nombre)
    },[])

    return (
        <form onSubmit={handleSubmit(submit)} className='loginForm'>
            <h2>Welcome! Enter your email and password to continue</h2>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id='email' />
                <label htmlFor="pass">Password</label>
                <input {...register('password')} type="password" id='pass' />
            

            <button className='btnlogin btn' type='submit'>Login</button>
        </form>
    )
}

export default FormLogin