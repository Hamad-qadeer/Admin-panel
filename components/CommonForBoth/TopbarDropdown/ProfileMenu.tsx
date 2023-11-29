import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
// Redux
import Link from "next/link";

// users
import user1 from "@/assets/images/users/avatar-1.jpg";

//redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const ProfileMenu = (props: any) => {
  // const { success } = useSelector((state: any) => ({
  //   success: state.profile.success,
  // }));

  const profiledata = createSelector(

    (state : any) => state.profile,
    (state) => ({
      success: state.success,
    })
  );
// Inside your component
const { success} = useSelector(profiledata);

  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState<boolean>(false);

  const [username, setusername] = useState("Admin");

  useEffect(() => {
    const getAuthUser = localStorage.getItem("authUser");
    if (getAuthUser) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(getAuthUser);
        setusername(obj.displayName);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(getAuthUser);
        setusername(obj.username);
      }
    }
  }, [success]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item bg-soft-light border-start border-end"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1.src}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-1 fw-medium">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">

          <Link href={"/profile"} className="dropdown-item">
            <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
            {props.t("Profile")}{" "}
          </Link>{" "}

          <Link href={"/contacts-profile"} className="dropdown-item">
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </Link>

          <Link href="/page-lock-screen" className="dropdown-item">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            {props.t("Lock screen")}
          </Link>

          <div className="dropdown-divider" />
          <Link href="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
          
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
};
export default withTranslation()(ProfileMenu);
