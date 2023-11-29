import React, {useState} from "react";

//Import Icons
// Redux Store
//import component
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import LightDark from "../CommonForBoth/Menus/LightDark";

//import images
import logoDark from "@/public/logo-dark.svg";

//redux
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "reselect";
import Link from "next/link";

const Header = (props: any) => {
    const dispatch = useDispatch();
    
    const nonauthData = createSelector(
        (state: any) => state.Layout,
        (layout) => ({
            layoutMode: layout.layoutMode,
            showRightSidebar: layout.showRightSidebar,
        })
    );
// Inside your component
    const {layoutMode, showRightSidebar} = useSelector(nonauthData);
    
    const [search, setsearch] = useState<boolean>(false);
    const [isClick, setClick] = useState<boolean>(true);
    let logo = logoDark;
    
    /*** Sidebar menu icon and default menu set */
    function tToggle() {
      if(window){
        
        var body = document.body;
        setClick(!isClick);
        if (isClick) {
            body.classList.remove("sidebar-enable");
            document.body.setAttribute("data-sidebar-size", "sm");
        } else {
            body.classList.add("sidebar-enable");
            document.body.setAttribute("data-sidebar-size", "lg");
        }
      }
    }
    
    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link href="/ListPool" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo.src} alt="" height="40"/>
                </span>
                                <span className="logo-lg">
                  <img src={logo.src} alt="" height="40"/>{" "}
                                    {/*<span className="logo-txt">Launch Pad</span>*/}
                </span>
                            </Link>
                            
                            <Link href="/ListPool" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logo.src} alt="" height="40"/>
                </span>
                                <span className="logo-lg">
                  <img src={logo.src} alt="" height="40"/>{" "}
                                    {/*<span className="logo-txt">Launch Pad</span>*/}
                </span>
                            </Link>
                        </div>
                        
                        <button
                            onClick={() => {
                                tToggle();
                            }}
                            type="button"
                            className="btn btn-sm px-3 font-size-16 header-item"
                            id="vertical-menu-btn"
                        >
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                    
                    </div>
                    <div className="d-flex">
                        
                        {/* light / dark mode */}
                        <LightDark
                            layoutMode={layoutMode}
                            onChangeLayoutMode={props.onChangeLayoutMode}
                        />
                        
                        <ProfileMenu/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
