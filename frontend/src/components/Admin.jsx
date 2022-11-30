import React, { useEffect, useState } from 'react'
import { AdminCard } from './AdminCard'

export const Admin = () => {
    const [videos, setvideos] = useState([])
    const [number, setnumber] = useState(0)

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/videosforapproval', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
            const data = await response.json()
            console.log(data)
            setvideos(data.data)
            setnumber(data['length'])
        }
        fetchVideos()


    }, [])

    return (
        <div className='flex flex-col justify-start items-start py-60 px-8 space-y-4'>
            <div className='flex flex-col justify-start items-start bg-slate-100 py-2 px-4 rounded-md drop-shadow-lg '>
                <div className='text-2xl'>Approval Requests</div>
                <div className='text-3xl'>
                    {number}
                </div>
            </div>
            <div className='text-2xl justify-start items-start'>
                <div>Approval Requests</div>
            </div>
            <div className='px-4 py-2'>
            {
                videos.map((video,index) => {
                    return (
                        <AdminCard
                            key={index}
                            video={video}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}
