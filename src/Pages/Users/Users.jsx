import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Scss/Users.scss';
import CreateUser from './CreateUsers';
import GetUsers from './GetUsers';
import { getAllUsers } from '../../Services/Users';
import Swal from 'sweetalert2';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      setError(error);
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle errors
  if (error) {
    Swal.fire('Error!', error.message, 'error');
    return <div>Failed to load users!</div>;
  }

  return (
    <div className="user-form-container p-4">
      <div className="form-wrapper">
        <div className="row px-4">
          <div className="col-xl-6">
            <h2 className="text-end fs-2 mb-4 mt-2 text-black">تعریف کاربر جدید</h2>
            <div className="row">
              <CreateUser onUserCreated={fetchUsers} />
            </div>
          </div>
          <div className="col-xl-6">
            <h2 className="text-end fs-2 mb-4 mt-2 text-black">جدول کاربران</h2>
            <div className="row px-4 input-form text-light">
              <GetUsers users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
