import { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // Update the endpoint URL to /api/users/me
        const response = await axios.get('http://localhost:3000/api/users/me', config);
        console.log(response.data);
        // Set the user state to the response data
        setUser(response.data);
      } catch (error) {
        console.error(error);
        console.log('API call failed:', error);
      }
    };
  
    fetchUserProfile();
  }, []);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
    </div>
  );
};

export default UserProfile;


