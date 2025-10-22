import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../assets/css/landing.css"; // optional if you want styling
import bgImage from "../assets/images/landing-bg.jpg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        className="landing-page"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <h1>Kirby Plant Shop</h1>
        <p>Welcome to Kirby Plant Shop! We make your home bloom with love and cuteness.</p>
        <button onClick={() => navigate("/products")}>Get Started</button>
      </div>
    </>
  );
}

export default LandingPage;
