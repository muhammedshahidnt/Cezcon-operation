import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
        <>

            <div className="navbar bg-base-100  border-x-4   ">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-whi">CEZCON CRM</a>
                </div>
                <div className="flex-none gap-5">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto h-8" />
                    </div>

                    <h3>Sales</h3>
                    
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://www.cezconcrm.cloud/crm_icon.png" />
                            </div>
                        </div>

                    </div>
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost  avatar">
                            <div className="w-8   ">
                                <img alt="Tailwind CSS Navbar component" src="https://www.cezconcrm.cloud/static/images/9dot.png" />
                            </div>
                        </div>

                    </div> */}
                    
                    <h3>Shahid</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://www.cezconcrm.cloud/static/images/user_img_not_available.png" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <li><a>Activity log</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="divider"></div>  */}
         

        </>
    )
}

export default Header