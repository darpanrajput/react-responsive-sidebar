import React from "react";
import "./sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/callRedux";
const Sidebar = () => {
  // const theme = null;
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.themeName);

  const alterTheme = (theme) => {
    console.log(theme);
    changeTheme(dispatch, { name: theme });
  };
  return (
    <div>
      <div className={theme ? `sidebar ${theme}` : "sidebar"}>
        <div className="sidebar-top">
          <i className="logo fab fa-sketch"></i>
          <span className="brand">The App</span>
        </div>

        <div className="sidebar-profile">
          <div className="profile-container">
            <img className="pic profile-pic" src="images/pic.png" alt="pic" />
            <span className="list-item-text">Avatar</span>
          </div>
        </div>
        <div className="sidebar-center">
          <ul className="list">
            <li
              className={
                theme ? `list-item active ${theme}` : "list-item active"
              }
            >
              <i className="list-item-icon fas fa-home"></i>
              <span className="list-item-text">Dashoard</span>
            </li>
            <li className="list-item">
              <i className="list-item-icon fas fa-search"></i>
              <span className="list-item-text">Search</span>
            </li>
            <li className="list-item">
              <i className="list-item-icon fas fa-stream"></i>
              <span className="list-item-text">Insight</span>
            </li>

            <li className="list-item">
              <i className="list-item-icon fas fa-book"></i>
              <span className="list-item-text">Docs</span>
            </li>

            <li className="list-item">
              <i className="list-item-icon fas fa-users"></i>
              <span className="list-item-text">Community</span>
            </li>

            <li className="list-item">
              <i className="list-item-icon fas fa-toolbox"></i>
              <span className="list-item-text">Tools</span>
            </li>

            <li className="list-item">
              <i className="list-item-icon fas fa-shopping-cart"></i>
              <span className="list-item-text">Market</span>
            </li>

            <li className="list-item">
              <i className="list-item-icon fas fa-question-circle"></i>
              <span className="list-item-text">Resources</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div
            className="color-box dark"
            onClick={() => alterTheme("dark")}
          ></div>
          <div
            className="color-box night"
            onClick={() => alterTheme("night")}
          ></div>
          <div
            className="color-box light"
            onClick={() => alterTheme("light")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
