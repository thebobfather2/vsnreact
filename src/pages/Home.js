import React from 'react';
import "./Home.css";

    
function Home () {

  return (
    <main className="MainContainer">
      <section className={`p-3`}>
        <h1 style={{padding: "50px", color: "#ffffff"}}>Welcome to VSN!</h1>
        <p style={{color: "#ffffff"}}>Check out the marketplace, more coming soon!</p>
      </section>
    </main>
  )
}

export default Home;
