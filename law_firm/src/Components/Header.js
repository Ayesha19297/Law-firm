import React from "react";
import { Link } from "@mui/material";
import "./main.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./logo.png" alt="logo" width={30} height={30} />
        <h2>IGSTUDIO</h2>
      </div>
      <div className="about">
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About us</p>
      </div>
      <Link
        variant="contained"
        sx={{
          border: "2px solid #fff",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "page.main",
            // backgroundColor: "primary.main",
          },
        }}
      >
        Contact us
      </Link>
    </div>
  );
};

export default Header;
