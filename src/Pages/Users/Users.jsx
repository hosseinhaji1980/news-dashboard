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
      <div className="row d-flex justify-content-between  p-1">
      <div className="col-xl-5 text-light users p-5 rounded-3">
          <CreateUser onUserCreated={handleUserCreated} />
        </div>
        <div className="col-xl-6 text-light users rounded-3">
                <GetUsers users={users} />
        </div>
      </div>

    </div>
  );
};

export default Users;
