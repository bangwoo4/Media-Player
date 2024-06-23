import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <p>bangwoo4</p>
        <p>&copy; Copyright 2024 - React Media Player </p>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.geeksforgeeks.org/user/bangwoo4/"
                aria-label="GeeeksforGeeks"
              >
                GeeeksforGeeks
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bangwoo4_/"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100018136776949"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://github.com/bangwoo4" aria-label="Github">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
