import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaLock } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate() 
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (password !== password2) {
            alert('Passwords do not match')
        } else {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: name,
                    last_name: 'Mock',
                    email: email,
                    password: password,
                    username: email

                })
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(data){
                navigate('/login')
            }
            else{
                window.alert('Something went wrong')
            }
        }
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-[#effbff]'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                    <div className='w-3/5 p-5'>
                        <div className='py-4'>
                            <h2 className='text-3xl font-bold text-[#1B5A7A] mb-2'>Register your Account</h2>
                            <div className='border-2 w-10 border-[#1B5A7A] inline-block mb-2'></div>
                            <div className='flex justify-center my-2'>
                                <a href='#' className='border-2 w-10 border-gray-200 rounded-full p-3 mx-1'>
                                    <FaFacebookF className='text-sm' />
                                </a>
                                <a href='#' className='border-2 w-10 border-gray-200 rounded-full p-3 mx-1'>
                                    <FaLinkedinIn className='text-sm' />
                                </a>
                                <a href='#' className='border-2 w-10 border-gray-200 rounded-full p-3 mx-1'>
                                    <FaGoogle className='text-sm' />
                                </a>
                            </div>
                            <p className='text-gray-400 pb-2'>or use your email to register</p>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-64 p-1 flex items-center m-2'>
                                    <BsFillPersonFill className='text-gray-400 m-2' />
                                    <input type='text' name='name' onChange={(e) => setName(e.target.value)} placeholder='Full Name' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className='bg-gray-100 w-64 p-1 flex items-center m-2'>
                                    <FaRegEnvelope className='text-gray-400 m-2' />
                                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className='bg-gray-100 w-64 p-1 flex items-center mb-2'>
                                    <FaLock className='text-gray-400 m-2' />
                                    <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className='bg-gray-100 w-64 p-1 flex items-center mb-2'>
                                    <FaLock className='text-gray-400 m-2' />
                                    <input type='password' name='password' placeholder='Confirm Password' onChange={(e) => setPassword2(e.target.value)} className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className='flex justify-between w-64 mb-5'>
                                    <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1' />Remember me</label>
                                    {/* <a href='#' className='text-xs'>Forgot Password?</a> */}
                                </div>
                                <div onClick={handleSubmit} className='border-2 bg-[#1B5A7A] border-[#1B5A7A] text-[#E1F3F9] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#E1F3F9] hover:text-[#1B5A7A] cursor-pointer'>Sign up</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 bg-[#E1F3F9] text-white rounded-tr-2xl rounded-br-2xl py-24 px-12'>
                        <img className='mb-2 pb-5' src={logo} alt="Logo" />
                        <p className='mb-2 text-[#1B5A7A]'>Already a part of us?</p>
                        <Link to='/login' className='border-2 border-[#1B5A7A] text-[#1B5A7A] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#1B5A7A] hover:text-[#E1F3F9]'>Login</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register