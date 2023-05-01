import React, { useState } from 'react';
import ProfileComponent from '../components/ProfileComponent';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Smith',
    profilePicture: 'https://www.clker.com/cliparts/u/2/A/u/A/t/blank-profile-head-md.png',
    bio: 'I like hiking and reading.'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;
    try {
      const token = localStorage.getItem('token');
      response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      const text = await response.text();
      console.log(text);
    }
  };


  return (
    <div className="profile-page">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Profile Picture:
          <input
            type="text"
            name="profilePicture"
            value={user.profilePicture}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      <ProfileComponent
        username={user.name}
        profilePicture={user.profilePicture}
        bio={user.bio}
      />
    </div>
  );
}

export default Profile;
