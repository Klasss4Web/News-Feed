import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import logoImage from "../assets/images/elon.jpg";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <Box className="full-container">
    <Box className="logo-container">
      <Avatar name="Emmanue Ochade" src={logoImage} alt="logoImage" />
    </Box>
    <Box display="flex" width="60%" alignItems={"center"} justifyContent="space-between">
      <li className="link-list">
        <a className="nav" href="mailto: eochade15@gmail.com">
          Hire me
        </a>
      </li>
        <ul>
          <li className="link-list">
            <Link className="nav" to="/articles">
              Articles
            </Link>
          </li>
        </ul>
    </Box>
  </Box>
);
