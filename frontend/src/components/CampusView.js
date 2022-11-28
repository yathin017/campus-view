import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CampusView = () => {
  const [college,setCollege] = React.useState('IIT Bombay');
  const [institute_data,setinstitute_data] = React.useState([]);
  useEffect(() => {
    const getCollege = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/getinstitute',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          'name': college
        })
      })
      const data = await response.json()
      setinstitute_data(data.data)
      }
      getCollege()
    
  }, [college])
  
  return (
    <div className="bg-[#E4F4FA]">
      <div className="mx-10">
        <div className="pt-36 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-2xl font-semibold text-gray-700"
            >
              Select College
            </label>
            <select
              id="college"
              name="college"
              autoComplete="college-name"
              value={college}
              onChange={(e)=>{setCollege(e.target.value)}}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>IIT Bombay</option>
              <option>IIT Madras</option>
              <option>IIIT Naya Raipur</option>
            </select>
          </div>
        </div>
        <p className="text-4xl font-semibold pt-10">{institute_data.name}</p>
        <p className="text-2xl font-semibold pt-2">{institute_data.city}, {institute_data.state}</p>
        <p className="text-xl pt-2">{institute_data.description}</p>
        <p className="text-2xl pt-2 font-semibold">Contact Info</p>
        <p className="text-xl pt-2">Website:- <a href={institute_data.website} target='_blank'>{institute_data.website}</a></p>
        <p className="text-xl pt-2">Email:- {institute_data.email}</p>
        <p className="text-xl pt-2">Phone:- {institute_data.phone}</p>
        

        <p className="text-2xl pt-10 font-semibold">Gallery</p>
        <Carousel breakPoints={breakPoints} className="pt-5">
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CampusView;
