import React from 'react'

const tabledata = [
  {
    slno: 1,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 2,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 3,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 4,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 1,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 2,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 3,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 4,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 1,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 2,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 3,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 4,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 1,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 2,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 3,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
  {
    slno: 4,
    project_number: "sp:236",
    project_title: "oprration",
    company: "cezcon",
    type: "",
    project_date: " 20-05-2002",
    status: "pending",
    action: "view"
  },
]

const Projectpage = () => {
  return (
    <div className='flex flex-col p-6'>
      <div>

      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>sl_no</th>
                <th>project_number</th>
                <th>project_title</th>
                <th>company</th>
                <th>type</th>
                <th> project_date</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {tabledata.map((data) => {
                return (
                  <tr key={data.slno}>
                    <th>{data.slno}</th>
                    <td>{data.project_number}</td>
                    <td>{data.project_title}</td>
                    <td>{data.company}</td>
                    <td>{data.type}</td>
                    <td>{data.project_date}</td>
                    <td>
                      <div className='bg-yellow-400 rounded-full text-center text-white'>

                        {data.status}
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-ghost ">
                      {data.action}
                      </button>
                      </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Projectpage

// pages/posts.js
// import React from 'react';
// import Link from 'next/link';

// const posts = [
//   { id: '1', title: 'First Post' },
//   { id: '2', title: 'Second Post' },
//   { id: '3', title: 'Third Post' },
// ];

// const Projectpage = () => {
//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link href={`/posts/${post.id}`}>
//               <li>{post.title}</li>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Projectpage;
