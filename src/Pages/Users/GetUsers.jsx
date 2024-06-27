import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Scss/Users.scss';

const GetUsers = ({ users }) => {
  // Display users if fetched successfully
  if (!users.length) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <table className="table table-responsive table-striped table-hover ">
        <thead>
          <tr>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>ایمیل</th>
            <th>محل کار</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.workplace}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
