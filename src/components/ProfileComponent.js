import React from 'react';

function ProfileComponent(props) {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Username: {props.username}</p>
      <p>Profile Picture: <img src={props.profilePicture} alt="Profile Picture" /></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default ProfileComponent;
