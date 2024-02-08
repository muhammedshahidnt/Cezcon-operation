import React from 'react';
import Link from 'next/link';
import { authenticate } from '../dashboard/lib/actions';
import Navbar from '../ui/login/navbar/navbar';

const Page = () => {
  return (
    <div>
<Navbar />
      <div className="flex flex-col lg:flex-row h-screen  ">

        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <img
              // className='h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 '
              src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-whites">
          <div className="max-w-md mx-auto p-8">

            <img
              src="https://webportalapps.com/cezcon_pm/static/logo/logo.png"
              className="mx-auto mb-6"
              alt=""
              width="230"
              height="150"
            />

            <h1 className="text-sm font-semibold text-gray-500 text-center mb-4">Operation Module</h1>
            <h1 className="text-sm font-semibold text-gray-500 text-center mb-4">Login</h1>

            <form action={authenticate} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-600 text-center mt-5">
              Already have an account?{" "}
              <Link href="/login/register" className="text-black hover:underline">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
