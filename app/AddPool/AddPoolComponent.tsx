import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

const AddPoolComponent = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [activeTabFirst, setActiveTabFirst] = useState("projectInfo");

  const toggleTabFirst = (tab: React.SetStateAction<string>) => {
    if (activeTabFirst !== tab) {
      setActiveTabFirst(tab);
    }
  };
  const [activeTabSecond, setActiveTabSecond] = useState("participant");

  const toggleTabSecond = (tab: React.SetStateAction<string>) => {
    if (activeTabSecond !== tab) {
      setActiveTabSecond(tab);
    }
  };
  const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Åland Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, The Democratic Republic of the", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Cote D'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands (Malvinas)", code: "FK" },
    { name: "Faroe Islands", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard Island and Mcdonald Islands", code: "HM" },
    { name: "Holy See (Vatican City State)", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran, Islamic Republic Of", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, Democratic People'S Republic of", code: "KP" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People'S Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia, Federated States of", code: "FM" },
    { name: "Moldova, Republic of", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Netherlands Antilles", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "RWANDA", code: "RW" },
    { name: "Saint Helena", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia and Montenegro", code: "CS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Swaziland", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "United States Minor Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div>
              <Nav tabs className="mb-3" style={{ cursor: "pointer" }}>
                <NavItem>
                  <NavLink
                    className={activeTabFirst === "projectInfo" ? "active" : ""}
                    onClick={() => toggleTabFirst("projectInfo")}
                  >
                    Project Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTabFirst === "timeSetting" ? "active" : ""}
                    onClick={() => toggleTabFirst("timeSetting")}
                  >
                    Time Setting
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTabFirst === "userList" ? "active" : ""}
                    onClick={() => toggleTabFirst("userList")}
                  >
                    User List
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTabFirst}>
                <TabPane tabId="projectInfo">
                  <div className="row mb-3">
                    <div className="col-6">
                      <Card>
                        <CardBody>
                          <div className="row col-12 mt-3 mb-3">
                            <div className="row mb-3">
                              <div className="mb-3">
                                <Label className="form-label">Pool Name</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Pool Name"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Pool Banner
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Pool Banner"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">Website</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Website"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Relationship Type
                                </Label>
                                <select className="form-select">
                                  <option>None</option>
                                  <option>Incubation</option>
                                  <option>Standard IDO</option>
                                  <option>Giveaway</option>
                                  <option>Exclusive IDO</option>
                                </select>
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Market Maker
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Market Maker Icon
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Token Symbol (display)
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">Token Icon</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Coingecko ID
                                  (https://www.coingecko.com/en/coins/coin-name
                                  Find "API id" field in the Info section
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Total Token Amount
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">ATH Price</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <div className="row col-12 mt-3 mb-3">
                            <div className="row">
                              <div className="mb-3">
                                <Label className="form-label">
                                  Pool Network
                                </Label>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="poolNetworkRadios"
                                    id="formRadios1"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios1"
                                  >
                                    Ether
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="poolNetworkRadios"
                                    id="formRadios2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios2"
                                  >
                                    BSC
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="poolNetworkRadios"
                                    id="formRadios3"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios3"
                                  >
                                    Polygon
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="poolNetworkRadios"
                                    id="formRadios4"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios4"
                                  >
                                    Avalanche
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="poolNetworkRadios"
                                    id="formRadios5"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios5"
                                  >
                                    Arbitrum
                                  </label>
                                </div>
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Accepted Currency
                                </Label>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="acceptedCurrenciesRadios"
                                    id="formRadios6"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios6"
                                  >
                                    USDT
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="acceptedCurrenciesRadios"
                                    id="formRadios7"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="formRadios7"
                                  >
                                    USDC
                                  </label>
                                </div>
                              </div>
                              <div className="mb-3">
                                <div className="d-flex me-3">
                                  <Label className="form-label">
                                    KYC Bypass Required
                                  </Label>
                                  <div
                                    style={{
                                      display: "inline-block",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    <Input
                                      type="checkbox"
                                      id="switch1"
                                      switch="info"
                                      defaultChecked
                                    />
                                    <Label
                                      htmlFor="switch1"
                                      data-on-label="Yes"
                                      data-off-label="No"
                                    ></Label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card>
                        <CardBody>
                          <div className="row col-12 mt-3 mb-3">
                            <h5 className="mb-3">
                              Pool Contract Address (Please deposit token to
                              campaign smart contract address)
                            </h5>
                            <div className="row mb-3">
                              <div className="mb-3">
                                <Label className="form-label">
                                  Token address
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Address (Receive money)
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="row mb-3">
                                <Label className="form-label">
                                  Exchange Rate
                                </Label>
                                <div className="col-6">
                                  <Label className="form-label">You have</Label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-6">
                                  <Label className="form-label">You get</Label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <div className="row col-12 mt-3 mb-3">
                            <h5 className="mb-3">Social Setting</h5>
                            <div className="row mb-3">
                              <div className="mb-3">
                                <Label className="form-label">
                                  Twitter Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Telegram Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Medium Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Discord Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Facebook Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Youtube Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Social Task Link
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <div className="row col-12 mt-3 mb-3">
                            <h5 className="mb-3">Forbidden Countries</h5>
                            <Label className="form-label">
                              Forbidden Countries
                            </Label>
                            <select id="country" className="form-select">
                              {countries.map((country, index) => (
                                <option key={index} value={country.code}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-12">
                      <Card>
                        <CardBody>
                          <div className="mb-3">
                            <Label className="form-label">
                              Short Description
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Product</Label>
                            <div style={{ height: "400px" }}>
                              {" "}
                              {/* Adjust the height as needed */}
                              <ReactQuill
                                id="123"
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Roadmap</Label>
                            <div style={{ height: "400px" }}>
                              {" "}
                              {/* Adjust the height as needed */}
                              <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Business model</Label>
                            <div style={{ height: "400px" }}>
                              {" "}
                              {/* Adjust the height as needed */}
                              <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Team</Label>
                            <div style={{ height: "400px" }}>
                              {" "}
                              {/* Adjust the height as needed */}
                              <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">
                              Partners and investors
                            </Label>
                            <div style={{ height: "400px" }}>
                              {" "}
                              {/* Adjust the height as needed */}
                              <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Token metrics</Label>
                            <div style={{ height: "400px" }}>
                              {" "}
                              {/* Adjust the height as needed */}
                              <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="timeSetting">
                  <div className="row mb-3">
                    <div className="col-6">
                      <Card>
                        <CardBody>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Whitelist Start / Competition Start
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Whitelist End / Competition End
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Announcement Time
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Min Tier Pre-Order
                              </label>
                              <select className="form-select">
                                <option>Tier</option>
                                <option>Bronze</option>
                                <option>Silver</option>
                                <option>Gold</option>
                                <option>Diamond</option>
                              </select>
                            </div>
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Start Pre-Order Time
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Start buy time
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Finish buy time
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Start FCFS time (between start & finish time) -
                                only apply for whitelisted users
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">Claim time</label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row col-12 mb-3">
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                Listing time / Start refund time
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                            <div className="col-6 mb-3">
                              <label className="form-label">
                                End refund time
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card>
                        <CardBody>
                          <h5 className="mb-3">Claim Configuration</h5>
                          <div className="row">
                            <div className="col-12 mb-3">
                              <Label className="form-label">Claim Policy</Label>
                              <Input
                                type="text"
                                className="form-control"
                                placeholder="Wallet Address"
                              />
                            </div>
                            <div className="col-12 mb-3">
                              <label className="form-label">Claim Type</label>
                              <select className="form-select">
                                <option>Claim on Launchpad</option>
                                <option>Airdrop to participant's wallet</option>
                                <option>
                                  Claim a part of tokens on Launchpad
                                </option>
                                <option>Claim on the project's website</option>
                              </select>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                              <div>
                                <button
                                  className="btn btn-info me-2"
                                  type="button"
                                >
                                  Create
                                </button>
                                <button
                                  className="btn btn-success me-2"
                                  type="button"
                                >
                                  Repeat
                                </button>
                              </div>
                              <div>
                                <button
                                  className="btn btn-success me-2"
                                  type="button"
                                >
                                  Refresh
                                </button>
                                <button
                                  className="btn btn-danger me-2"
                                  type="button"
                                >
                                  Delete All
                                </button>
                              </div>
                            </div>
                            <div className="col-12">
                              <Table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Start Time</th>
                                    <th>Max Claim (%)</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr></tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="userList">
                  <Card>
                    <CardBody>
                      <div style={{ width: "100px", marginBottom: "20px" }}>
                        <label className="form-label">Min Tier</label>
                        <select className="form-select">
                          <option>Bronze</option>
                          <option>Silver</option>
                          <option>Gold</option>
                          <option>Diamond</option>
                        </select>
                      </div>
                      <i>
                        Tier Configuration - This table will be updated after
                        picking winner
                      </i>

                      <table id="tech-companies-1" className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Allocation (%)</th>
                            <th>Participants</th>
                            <th>Allocations</th>
                            <th>Currency</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Bronze</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>USDT</td>
                          </tr>
                          <tr>
                            <td>Silver</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>USDT</td>
                          </tr>
                          <tr>
                            <td>Gold</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>USDT</td>
                          </tr>
                          <tr>
                            <td>Diamond</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>USDT</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <div>
                        <Nav
                          tabs
                          className="mb-3"
                          style={{ cursor: "pointer" }}
                        >
                          <NavItem>
                            <NavLink
                              className={
                                activeTabSecond === "participant"
                                  ? "active"
                                  : ""
                              }
                              onClick={() => toggleTabSecond("participant")}
                            >
                              Participant
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                activeTabSecond === "winner" ? "active" : ""
                              }
                              onClick={() => toggleTabSecond("winner")}
                            >
                              Winner
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                activeTabSecond === "fcfsallocation"
                                  ? "active"
                                  : ""
                              }
                              onClick={() => toggleTabSecond("fcfsallocation")}
                            >
                              FCFS Allocation
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTabSecond}>
                          <TabPane tabId="participant">
                            <div className="d-flex justify-content-between mb-3">
                              <span className="d-flex">
                                <Input
                                  type="file"
                                  className="form-control w-auto me-2"
                                />
                                <button className="btn btn-info me-2">
                                  Import Participants
                                </button>
                              </span>
                              <span>
                                <button className="btn btn-info me-2">
                                  Export Participants
                                </button>
                                <button className="btn btn-info me-2">
                                  Pick Winners
                                </button>
                              </span>
                            </div>
                            <div className="d-flex float-end">
                              <form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                  />
                                  <button
                                    className="btn btn-info"
                                    type="button"
                                  >
                                    <i className="bx bx-search-alt align-middle"></i>
                                  </button>
                                </div>
                              </form>
                            </div>
                            <table id="tech-companies-1" className="table">
                              <thead>
                                <tr>
                                  <th>Email</th>
                                  <th>Wallet Address</th>
                                  <th>Tier</th>
                                  <th>Cached Points</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ceo@chaingp.org</td>
                                  <td>
                                    0xbA80Cb24185EF36deb1607Ab4CA17aC1389a6957
                                  </td>
                                  <td>0</td>
                                  <td>0</td>
                                </tr>
                              </tbody>
                            </table>
                          </TabPane>
                          <TabPane tabId="winner">
                            <button className="btn btn-info mb-3">
                              Export Winners
                            </button>
                            <Card>
                              <CardHeader
                                onClick={toggle}
                                style={{ cursor: "pointer" }}
                              >
                                {open ? (
                                  <FeatherIcon icon="chevron-down" />
                                ) : (
                                  <FeatherIcon icon="chevron-right" />
                                )}{" "}
                                Public Winner Setting
                              </CardHeader>
                              <Collapse isOpen={open}>
                                <CardBody>
                                  <div className="d-flex justify-content-between">
                                    <span className="d-flex">
                                      <Label className="form-label">
                                        Public Winner
                                      </Label>
                                      <div
                                        style={{
                                          display: "inline-block",
                                          marginLeft: "20px",
                                        }}
                                      >
                                        <Input
                                          type="checkbox"
                                          id="switchWinner"
                                          switch="info"
                                          defaultChecked
                                        />
                                        <Label
                                          htmlFor="switchWinner"
                                          data-on-label="Yes"
                                          data-off-label="No"
                                        ></Label>
                                      </div>
                                    </span>
                                    <span>
                                      <span className="d-flex">
                                        <Input
                                          type="file"
                                          className="form-control w-auto me-2"
                                        />
                                        <button className="btn btn-info me-2">
                                          Import FCFS
                                        </button>
                                      </span>
                                    </span>
                                  </div>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <div className="d-flex float-end">
                              <div className="d-flex align-items-center">
                                <button className="btn btn-danger me-3">
                                  Delete All
                                </button>
                                <form className="app-search d-none d-lg-block">
                                  <div className="position-relative">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search..."
                                    />
                                    <button
                                      className="btn btn-info"
                                      type="button"
                                    >
                                      <i className="bx bx-search-alt align-middle"></i>
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <table id="tech-companies-1" className="table">
                              <thead>
                                <tr>
                                  <th>Email</th>
                                  <th>Wallet Address</th>
                                  <th>Lottery Ticket</th>
                                  <th>Min Buy</th>
                                  <th>Max Buy</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr></tr>
                              </tbody>
                            </table>
                          </TabPane>
                          <TabPane tabId="fcfsallocation">
                            <div className="d-flex float-end">
                              <form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                  />
                                  <button
                                    className="btn btn-info"
                                    type="button"
                                  >
                                    <i className="bx bx-search-alt align-middle"></i>
                                  </button>
                                </div>
                              </form>
                            </div>
                            <table id="tech-companies-1" className="table">
                              <thead>
                                <tr>
                                  <th>Wallet Address</th>
                                  <th>FCFS Ticket</th>
                                  <th>Snapshot Points</th>
                                  <th>Level</th>
                                  <th>Min Buy</th>
                                  <th>Max Buy</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr></tr>
                              </tbody>
                            </table>
                          </TabPane>
                        </TabContent>
                      </div>
                    </CardBody>
                  </Card>
                </TabPane>
              </TabContent>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <Link href="/ListPool">
                  <button className="btn btn-info me-2" type="button">
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <button className="btn btn-info me-3">Create</button>
                <button className="btn btn-info me-3">Deploy</button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddPoolComponent;
