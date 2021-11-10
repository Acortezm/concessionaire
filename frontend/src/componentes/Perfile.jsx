import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const Perfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated && (
        <div className= 'flex-col items-center justify-center mb-0 mt-3'>
          <img src={user.picture} alt={user.name} className = "rounded-full h-36 w-36 ml-4 flex items-center justify-center" />
          <h2 className= "text-sm text-center text-gray-600 mt-5 font-bold ">{user.name}</h2>
          <p className= "text-sm text-center text-gray-600 mt-5 font-bold ">{user.email}</p>
        </div>
      )
    );
  };
export default Perfile
