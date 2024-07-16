import React from "react";
// import "./home.css"; // Import the CSS file

function App() {
  return (
    <div className="home">
      <div className="heading">
        <h1>MedEdge.</h1>
        <p>
          Join our community of care. Sign up to receive the highest standard of
          medical support and services.
        </p>
      </div>
      <div className="card">
        <div className="left">
          <div className="Mededge">
            <h1>MedEdge</h1>
            <h2>Bridging the Gap in Medical and Technological Collaboration</h2>
            <p>
              MedEdge is an innovative initiative designed to bridge the
              significant gap between Medical Colleges, Hospitals, and
              Technological Universities in India. This project aims to foster
              collaboration and advance research by integrating the latest
              technological advancements into the medical field.
            </p>
          </div>
          <div className="community">
            <h3>Join Our Community</h3>
            <p>
              Discover the unique opportunities at MedEdge, where excellence in
              education meets exceptional healthcare. Whether you are a future
              medical professional or seeking top-notch healthcare services, we
              invite you to be part of our vibrant community dedicated to making
              a difference.
            </p>
          </div>
          <div className="buttons">
            <button className="button">Login</button>
            <button className="button">Register</button>
          </div>
        </div>
        <div className="right">
          <div className="rightimg"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
