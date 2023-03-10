import React, { useState } from "react";
import logo from "../assets/logo_hexagon.svg";
import { Popover } from "react-tiny-popover";
import history from "../assets/history.svg";
import "./Header.scss";

const Header = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState();

  return (
    <header className="Header">
      <div className="Header-content">
        <img
          src={logo}
          className="Header-logo"
          alt="logo"
          heioght="60"
          width="60"
        />
        <Popover
          isOpen={isPopoverOpen}
          positions={["top", "bottom", "left", "right"]} // preferred positions by priority
          content={
            <div className="Header-popoverContent">
              this could offer a list of recent searches (or another useful list of names and IDs).
            </div>
          }
        >
          <button
            aria-describedby="tooltip"
            type="button"
            className="Header-button btn btn-outline-secondary btn-lg"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <img src={history} className="bi bi-clock-history Header-history" />
          </button>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
