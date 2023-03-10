import React from "react";
import "./HeaderLogin.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function HeaderLogin() {
  const dispatch = useDispatch();

  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header_div">
      <div className="headerr">
        <button style={{ display: "contents" }}>
          <div className="logo">
            <div className="logo_wrapper">
              <div className="logo_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="header_left">
          <div className="header_search">
            <div className="header_typehead">
              <input placeholder="Search" type="text" />
              <div className="search_icon">
                <div className="search_icon1">
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar={true}
            drop={ArrowDropDownIcon}
            title="Me"
            onClick={logoutofApp}
          />
          <div className="AppIcon">
            <HeaderOption
              Icon={AppsIcon}
              Drop={ArrowDropDownIcon}
              title="Work"
            />
          </div>
          <div className="premium_link">
            <a href="https://www.linkedin.com/feed/" className="premium">
              Try Premium for free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLogin;
