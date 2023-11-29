import {Card, CardBody, CardHeader, Col, Input, Row} from "reactstrap";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import React from "react";

const ListUserComponent = () => {
    const tabledata = [
        {
            ticker: "GOOG",
            companyName: "Google Inc.",
            price: "597.74",
            time: "12:12PM",
            change: "14.81 (2.54%)",
            low: "582.93",
            high: "597.95",
            bidQuantity: "597.73 x 100",
            askQuantity: "597.91 x 300",
            volume: "731.10"
        },
        {
            ticker: "AAPL",
            companyName: "Apple Inc.",
            price: "378.94",
            time: "12:22PM",
            change: "5.74 (1.54%)",
            low: "373.20",
            high: "381.02",
            bidQuantity: "378.92 x 300",
            askQuantity: "378.99 x 100",
            volume: "505.94"
        },
        {
            ticker: "AMZN",
            companyName: "Amazon.com Inc.",
            price: "191.55",
            time: "12:23PM",
            change: "3.16 (1.68%)",
            low: "188.39",
            high: "194.99",
            bidQuantity: "191.52 x 300",
            askQuantity: "191.58 x 100",
            volume: "240.32"
        },
        {
            ticker: "ORCL",
            companyName: "Oracle Corporation",
            price: "31.15",
            time: "12:44PM",
            change: "1.41 (4.72%)",
            low: "29.74",
            high: "30.67",
            bidQuantity: "31.14 x 6500",
            askQuantity: "31.15 x 3200",
            volume: "36.11"
        },
        {
            ticker: "MSFT",
            companyName: "Microsoft Corporation",
            price: "25.50",
            time: "12:27PM",
            change: "0.66 (2.67%)",
            low: "24.84",
            high: "25.37",
            bidQuantity: "25.50 x 71100",
            askQuantity: "25.51 x 17800",
            volume: "31.50"
        },
        {
            ticker: "CSCO",
            companyName: "Cisco Systems, Inc.",
            price: "18.65",
            time: "12:45PM",
            change: "0.97 (5.49%)",
            low: "17.68",
            high: "18.23",
            bidQuantity: "18.65 x 10300",
            askQuantity: "18.66 x 24000",
            volume: "21.12"
        },
        {
            ticker: "YHOO",
            companyName: "Yahoo! Inc.",
            price: "15.81",
            time: "12:25PM",
            change: "0.11 (0.67%)",
            low: "15.70",
            high: "15.94",
            bidQuantity: "15.79 x 6100",
            askQuantity: "15.80 x 17000",
            volume: "18.16"
        }
    ]
    
    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <div className="d-flex justify-content-evenly">
                            <div>
                                <button className="btn btn-info me-2" type="button"> Export to CSV</button>
                                <button className="btn btn-info me-2" type="button"> Set bonus</button>
                                <button className="btn btn-info me-2" type="button"> Wipe all bonuses</button>
                            </div>
                            <div>
                                Import CSV bonus file
                                <Input
                                    type="file"
                                    className="form-control w-auto me-2"
                                />
                            </div>
                            <div>
                                <button className="btn btn-info me-2" type="button"> Import bonus</button>
                                
                                <select className="form-select">
                                    <option>Tier</option>
                                    <option>Bronze</option>
                                    <option>Silver</option>
                                    <option>Gold</option>
                                    <option>Diamond</option>
                                </select>
                            </div>
                            <form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                    />
                                    <button className="btn btn-info" type="button">
                                        <i className="bx bx-search-alt align-middle"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className="table-rep-plugin">
                            <div
                                className="table-responsive mb-0"
                                data-pattern="priority-columns"
                            >
                                <Table
                                    id="tech-companies-1"
                                    className="table"
                                >
                                    <Thead>
                                        <Tr>
                                            <Th>Wallet</Th>
                                            <Th>Total</Th>
                                            <Th>Bonus</Th>
                                            <Th>Tier</Th>
                                            <Th>Email</Th>
                                            <Th>Telegram</Th>
                                            <Th>Updated at</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {tabledata.map((rowData: any, index: any) => (
                                            <Tr key={index}>
                                                <Th>
                                                    {rowData.ticker} <span
                                                    className="co-name">{rowData.companyName}</span>
                                                </Th>
                                                <Td>{rowData.price}</Td>
                                                <Td>{rowData.time}</Td>
                                                <Td>{rowData.change}</Td>
                                                <Td>{rowData.low}</Td>
                                                <Td>{rowData.low}</Td>
                                                <Td>{rowData.low}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default ListUserComponent;