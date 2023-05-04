
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../Redux/Action';

const Sidebar = ({ user, logout }) => {
  return (
    
    <div>
      {user && (
        <div>
          <h3>Profile Details</h3>
          <p>{`Name: ${user.name}`}</p>
          <p>{`Email: ${user.email}`}</p>
          
    </div>
  )}
  <button onClick={logout}>Logout</button>
</div>
  )
}