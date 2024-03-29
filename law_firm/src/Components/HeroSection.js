import React from "react";
import { TextField, InputAdornment, Button, IconButton } from "@mui/material";
import "./main.css";
import heroImage from "../assets/heroImage.svg";
import "./main.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h1>You don’t have to</h1>
          <h1>Fight them Alone</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <TextField
            className="input"
            label="Enter your eamil address"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "black",
                        backgroundColor: "#f5ad42",
                        borderRadius: "43px",
                        width: "137px",
                        height: "62px",
                      }}
                    >
                      Let's talk
                    </Button>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
