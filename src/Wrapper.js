import React from "react";
import "./Wrapper.css";
import { Link } from "react-router-dom";

function Wrapper() {
  return (
    <div class="wrapper">
      <div class="content">
        <div class="content_circle">
          <div class="text_circle">
            <p1>© dba.ca (2020-2022) </p1>
            <a target="blank" href="https://iamf4t4ll.web.app">
              Gadzhi Beybutov
            </a>
            <div className="logo_wrapper">
              <a target="blank" href="https://vk.com/id_rhymes">
                <img className="header_logo2" src="4395x8f02-300x300.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
