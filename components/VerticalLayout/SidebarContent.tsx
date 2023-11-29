import PropTypes from "prop-types";
import React, {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

//i18n
import {withTranslation} from "react-i18next";

// MetisMenu
import MetisMenu from "metismenujs";
import Link from "next/link";

import withRouter from "../Common/withRouter";

const SidebarContent = (props: any) => {
    const ref: any = useRef();
    const pathname = usePathname();
    
    useEffect(() => {
        const menu = new MetisMenu("#side-menu");
        
        menu.update();
        return () => {
            menu.dispose();
        };
    }, []);
    return (
        <React.Fragment>
            <SimpleBar style={{maxHeight: "100%"}} ref={ref}>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">{props.t("Menu")} </li>
                        <li>
                            <Link href="/ListPool" className="">
                                <FeatherIcon icon="align-center"/> <span>{props.t("List Pool")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ListUser" className="">
                                <FeatherIcon icon="users"/> <span>{props.t("List User")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/KYCUserList" className="">
                                <FeatherIcon icon="users"/> <span>{props.t("KYC User List")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/StakingPools" className="">
                                <FeatherIcon icon="align-center"/> <span>{props.t("Staking Pools")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ListAdmin" className="">
                                <FeatherIcon icon="user"/> <span>{props.t("List Admin")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Statistics" className="">
                                <FeatherIcon icon="trending-up"/> <span>{props.t("Statistics")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#" className="has-arrow">
                                <FeatherIcon icon="settings"/> <span>{props.t("Config")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link
                                        href="/Landing"
                                        className={pathname == "/Landing" ? "active" : ""}
                                    >
                                        <span>{props.t("Landing")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/Faqs"
                                        className={pathname == "/Faqs" ? "active" : ""}
                                    >
                                        <span>{props.t("Faqs")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/Menu "
                                        className={pathname == "/Menu" ? "active" : ""}
                                    >
                                        {" "}
                                        <span>{props.t("Menu")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/Tiers"
                                        className={pathname == "/Tiers" ? "active" : ""}
                                    >
                                        <span>{props.t("Tiers")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/TermsOfService"
                                        className={pathname == "/TermsOfService" ? "active" : ""}
                                    >
                                        <span>{props.t("Terms of Services")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/PrivacyPolicy"
                                        className={pathname == "/PrivacyPolicy" ? "active" : ""}
                                    >
                                        <span>{props.t("Privacy Policy")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/ThemeOptions"
                                        className={pathname == "/ThemeOptions" ? "active" : ""}
                                    >
                                        <span>{props.t("Theme Options")}</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        href="/NeedHelp"
                                        className={pathname == "/NeedHelp" ? "active" : ""}
                                    >
                                        <span>{props.t("Need Help")}</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </SimpleBar>
        </React.Fragment>
    );
};

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withTranslation()(SidebarContent);
