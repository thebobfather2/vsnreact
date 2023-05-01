import React, { useState } from 'react';
import './Profile.css';
import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {
  return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey",
        }}>
            <div>
                <img style={{width:"150px", height:"160px", borderRadius:"80px"}} 
                src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg"
                />
            </div>
            <div>
                <h2>Bobby Rabbit</h2>
                <div style={{display:"flex", justifyContent:"space-between", width:"112%"}} >
                    <h5>69 posts</h5>
                    <h5>420 followers</h5>
                    <h5>22 following</h5>
                </div>
            </div>
        </div>
        <div className='gallery'>
                    <img className='item' src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg" />
                    <img className='item' src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg" />
                    <img className='item' src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg" />
                    <img className='item' src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg" />
                    <img className='item' src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg" />
                    <img className='item' src="https://pbs.twimg.com/profile_images/1592963714331860996/qhg-IWoI_400x400.jpg" />
                </div>
    </div>
  )
}

export default Profile;
