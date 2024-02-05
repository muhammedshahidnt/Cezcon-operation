import { addUser } from '@/app/dashboard/lib/actions'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold text-center">Register</h2>
        <form action={addUser} className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>




    // <div className="flex h-screen">

    //   <div className="hidden lg:flex items-center justify-center flex-1 bg-teal-100 text-black">
    //     <div class="max-w-md text-center">
    //       <img src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?size=626&ext=jpg&ga=GA1.1.1331093577.1706853688&semt=ais" alt="" width="100%" height="100%" />
    //     </div>
    //   </div>


    //   <div className="w-full bg-teal-100 lg:w-1/2 flex items-center justify-center">
    //     <div className="max-w-md w-full p-6">

    //       <img src=" https://webportalapps.com/cezcon_pm/static/logo/logo.png" className="items-center justify-center flex-1 ml-20" alt="" width="230" height="150" />


    //       {/* <h1 className="text-lg font-semibold mb-6 text-black text-center">Sign Up</h1> */}
    //       <h1 className="text-sm font-semibold mb-6  text-gray-500 text-center">Join to Our Community  </h1>
    //       <h1 className="text-sm font-semibold text-gray-500 text-center"> Sign Up  </h1>
    //       <div className="mt-4 flex flex-col  items-center justify-between">
    //         {/* lg:flex-row */}
    //         {/* <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
    //                         <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
    //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" className="w-4">
    //                                 <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
    //                             </svg> Sign Up with Github </button>
    //                     </div> */}
    //       </div>
    //       {/* <div className="mt-4 text-sm text-gray-600 text-center">
    //                     <p>or with email</p>
    //                 </div> */}
    //       <form action={addUser} method="POST" className="space-y-4">
    //         <div>
    //           <input type="text" id="username" placeholder="Username" name="username" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
    //         </div>
    //         <div>
    //           <input type="text" id="email" placeholder="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
    //         </div>
    //         <div>
    //           <input type="password" id="password" placeholder="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
    //         </div>
    //         <div>
    //           <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
    //         </div>
    //       </form>
    //       <div className="mt-4 text-sm text-gray-600 text-center">
    //         <p>Already have an account? <a href="#" className="text-black hover:underline">Login here</a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default page