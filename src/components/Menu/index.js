import React from "react";
import "./styles.css";

import { withBaseIcon } from "react-icons-kit";
import { eject } from "react-icons-kit/icomoon";

const SideIconContainer = withBaseIcon({
  size: 8,
  style: {
    color: "#ccc",
    margin: "5px"
  }
});
export const MenuItem = () => <SideIconContainer icon={eject} />;

const Menu = () => (
  <menu id="main-menu">
    <div className="main">
      <div className="menu-left">
        <ul>
          <li>
            Potions
            <MenuItem icon={eject} />
          </li>
          <li>
            Igredients
            <MenuItem icon={eject} />
          </li>
          <li>
            Books
            <MenuItem icon={eject} />
          </li>
          <li>
            Supplies
            <MenuItem icon={eject} />
          </li>
          <li>
            Charms
            <MenuItem icon={eject} />
          </li>
          <div className="lastLi">
            <li>
              Clearance!
              <MenuItem icon={eject} />
            </li>
          </div>
        </ul>
      </div>
      <div className="menu-right">
        <ul>
          <li>
            <a href="">Sign In</a>
          </li>
          <span>or</span>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </menu>
);

export default Menu;
