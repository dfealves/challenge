import React from "react";
import "./styles.css";
import { Icon } from "react-icons-kit";
import { search, cart } from "react-icons-kit/icomoon";

const Header = () => (
  <header id="main-header">
    <div className="header-left">
      <h3 className="title-name">
        <strong>MERLIN'S </strong> POTIONS
      </h3>
      <span>fine potions since 1026</span>
    </div>
    <div className="header-center">
      <label htmlFor="">
        <Icon
          style={{
            color: "#d60f0f",
            position: "relative",
            left: "30px"
          }}
          size={16}
          icon={search}
        />
        <input type="" placeholder="Search our stock" />
      </label>
    </div>
    <div className="header-right">
      <ul>
        <li>
          Free shipping
          <span>on order over $50</span>
        </li>
        <li>
          <Icon
            style={{
              color: "#480c66",
              marginTop: "10px",
              marginLeft: "20px",
              marginRight: "20px"
            }}
            size={32}
            icon={cart}
            m
          />
        </li>
        <li>
          BAG: <span>1</span>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
