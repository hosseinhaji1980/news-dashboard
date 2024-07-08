import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.scss';

const GetUsers = ({ users }) => {
  // Display users if fetched successfully
  if (!users.length) {
    return <div>Loading users...</div>;
  }

  return (
    <div className='user-list'>
            <h3 className='text-center'>لیست کاربران</h3>
      <table className='users-table mb-6'  style={{ overflowX: 'auto', maxHeight: '1000px' } }>
        
        <thead >
          <tr className='text-center'>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>ایمیل</th>
            <th>محل کار</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className='px-2'>{user.first_name}</td>
              <td className='px-2'>{user.last_name}</td>
              <td className='text-start email'>{user.email}</td>
              <td className='px-2'>{user.workplace}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
