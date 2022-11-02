import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#E4F4FA] flex justify-center items-center py-24 pb-0"
    >
      <div className="flex flex-col md:flex-row md:space-x-11 space-y-6 md:space-y-0 bg-[#000223] w-full max-w-4xl p-8 sm:p-10 rounded-xl shadow-lg text-gray-300 overflow-hidden scale-90">
        <div className="flex flex-col space-y-5 justify-between">
          <div>
            <h1 className="font-bold py-2 text-4xl tracking-wide">
              Want to reach us out?
            </h1>
            <p className="pt-2 text-cyan-100 text-sm px-2 ">
              Fill and submit the form to contact us!!!
            </p>
          </div>
          <div className="flex flex-col space-y-4 px-2">
            <div className="inline-flex space-x-3 items-center text-cyan-100 hover:text-teal-300">
              <ion-icon name="mail-sharp" className="text-xl" />
              <span>
                <a
                  href="mailto:yathin20100@iiitnr.edu.in"
                  className="underline focus:text-[#CF6C2F]"
                >
                  yathin20100@iiitnr.edu.in
                </a>
              </span>
            </div>
            {/* <div className="inline-flex space-x-3 items-center text-cyan-100 hover:text-teal-300">
              <ion-icon name="call-sharp" className="text-xl" />
              <span>
                <a
                  href="tel:+917207842318"
                  className="underline focus:text-[#CF6C2F]"
                >
                  +91 7207842318
                </a>
              </span>
            </div> */}
            <div className="inline-flex space-x-3 items-center text-cyan-100">
              <ion-icon name="location-sharp" className="text-xl" />
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg px-2">
            <a
              className="hover:text-[#0A66C2]"
              href="https://www.linkedin.com/in/yathin-prakash-kethepalli/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="hover:text-[#E13D68]"
              href="https://www.instagram.com/yathin017/"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              className="hover:text-[#1A8CD8]"
              href="https://twitter.com/yathin017/"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-[#343c5b] rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-[#343c5b] rounded-full -left-28 -bottom-20"></div>
          <div className="relative z-10 bg-[#00053a] rounded-xl shadow-lg p-8 text-gray-100 md:w-80">
            <form
              action="https://getform.io/f/0bbead0b-7ccd-46df-b236-fee2f3697634"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Your Name"
                  className="ring-1 ring-gray-200 bg-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#CF6C2F] text-blue-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="xyz@abc.com"
                  className="ring-1 ring-gray-200 bg-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#CF6C2F] text-blue-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  type="text"
                  name="Message"
                  required
                  placeholder="Type your message"
                  rows="4"
                  className="ring-1 ring-gray-200 bg-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#CF6C2F] text-blue-900"
                />
              </div>
              <button
                type="submit"
                className="inline-block border-2 border-[#CF6C2F] py-2 px-6 rounded-lg text-[#CF6C2F] uppercase text-sm self-center hover:shadow hover:bg-[#CF6C2F] hover:text-white font-bold "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact