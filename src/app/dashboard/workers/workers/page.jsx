import React from 'react'
import { FetchUsers } from '../../lib/data'
const Workerspage = async () => {
const data = await FetchUsers()
// console.log('====================================');
// console.log(data);
// console.log('====================================');

// console.log('====================================');
// console.log(data);
// console.log('====================================');
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users) => {
              return (
              <tr>
                  <td>{users.id}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
              </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Workerspage