import React, { useEffect } from "react";
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [userloggedin, setUserloggedin] = React.useState(false);
  useEffect(() => {
    const fetch_data = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      const data = await response.json()
      console.log(data)
      if (data.hasOwnProperty('detail')) {
        navigate('/login')
      }
      else {
        setUserloggedin(true)
      }

    }
    fetch_data()
  }, [])
  const handleLogout = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
    const data = await response.json()
    console.log(data)
    if (data) {
      localStorage.removeItem('token')
      navigate('/')
    }
  }

  return (
    <header className="text-[#565c67] bg-[#E4F4FA] body-font w-full z-10 absolute">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} className="h-20" alt="Logo"></img>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to='/' className="mr-5 hover:text-[#1B5A7A]">Home</Link>
          <Link to='/about' className="mr-5 hover:text-[#1B5A7A]">About us</Link>
          <Link to='/pricing' className="mr-5 hover:text-[#1B5A7A]">Pricing</Link>
          <Link to='/contact' className="mr-5 hover:text-[#1B5A7A]">Contact us</Link>
        </nav>
        {
          !userloggedin ? <Link to='/login' className="cursor-pointer bg-[#6B7280] p-2 rounded-md text-white hover:bg-[#1B5A7A] hover:shadow-sm hover:shadow-[#1B5A7A] transition-all duration-500">
            Get Started
          </Link> : <div onClick={handleLogout} className="cursor-pointer bg-[#6B7280] p-2 rounded-md text-white hover:bg-[#1B5A7A] hover:shadow-sm hover:shadow-[#1B5A7A] transition-all duration-500">Logout</div>
        }
      </div>
    </header>
  );
};

export default Navbar;
