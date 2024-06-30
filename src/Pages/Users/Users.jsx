import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.scss';
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
      console.log(users);
    } catch (error) {
      setError(error);
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserCreated = () => {
    fetchUsers();
  };

  // Handle errors
  if (error) {
    Swal.fire('Error!', error.message, 'error');
    return <div>Failed to load users!</div>;
  }

  return (
    <div className="user-form">
      <div className="form-wrapper">
    <div className="row g-3">
        <div className="col-xl-5 create-user mt-4 rounded-4">
            <h2 className="text-end fs-2  mt-2 text-light">تعریف کاربر جدید</h2>
            <div className="row p-5">
                <CreateUser onUserCreated={handleUserCreated} />
            </div>
        </div>
        <div className="col-xl-5  mt-4 rounded-4">
            <h2 className="text-end fs-2 mt-2 text-light">جدول کاربران</h2>
            <div className="row  user-list">
                <GetUsers users={users} />
            </div>
        </div>
    </div>
      </div>
      <div className="row">
        <div className="col-6 bg-light px-4">
          <h2>werwer</h2>
        </div>
        <div className="col-6  px-4">
          <h2 className='bg-info'>ewrwer</h2>
        </div>
      </div>
    </div>
  );
};

export default Users;
