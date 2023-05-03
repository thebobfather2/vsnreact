import React from 'react';
import "./Home.css";
import vsnLogo from "../img/vsn.png";

    
function Home () {

  return (
    <main className="MainContainer">
      <section className={`p-3`}>
        <img className='imgHome' src={vsnLogo} />
      </section>
    </main>
  )
}

export default Home;
