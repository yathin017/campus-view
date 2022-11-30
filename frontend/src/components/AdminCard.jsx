import React from 'react'

export const AdminCard = ({ video }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/approvevideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "name": video.institute_name,
                "videoname": video.name,
            })
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div className='flex flex-col justify-center items-start border drop-shadow-2xl px-4 py-2 rounded-lg  shadow-black space-y-2'>
            <div className='text-lg'>{video.institute_name}</div>
            <div>
                <video
                    className="h-[240px] w-  mt-5"
                    controls
                >
                    <source src={'http://127.0.0.1:8000' + video['video']} type="video/mp4" />
                </video>
            </div>
            <div className='flex flex-col justify-start items-start pt-1 space-y-0.5'>
                <div>Name of Uploader: <span className='font-bold'>{video.name_of_user}</span></div>
                <div>UPI ID : <span className='font-bold'>{video.upi_id}</span></div>
                <div>Place : <span className='font-bold'>{video.place}</span></div>
            </div>
            <div>
                <button className='bg-green-500 text-white px-4 py-2 rounded-lg' onClick={handleSubmit}>Approve</button>
            </div>
        </div>
    )
}
