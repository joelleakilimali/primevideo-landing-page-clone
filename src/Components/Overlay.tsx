import React from "react";

const Overlay: React.FC = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h1>Welcome to Prime Video</h1>
        <p>
          Enjoy exclusive Amazon Originals as well as popular movies and TV
          shows. Join Prime Video now for USD 5.99 per month. Cancel anytime.
        </p>
        <div className="button-container">
          <a href="#">Prime Video Member? Sign in</a>
        </div>
        <hr className="line" />
        <div className="button-container">
          <a href="#">Start your free trial*</a>
        </div>
        <div className="price">
          <p>Membership renews at USD 5.99/month.</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
