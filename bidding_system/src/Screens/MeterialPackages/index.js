import React, { useEffect, useState, useRef } from 'react'
import Select from "react-select";
import "./index.css";
import { Loader, CustomSelect, TableCustomStyle, Header, fixedtablediv, fixedtableheader, fixedtablerow } from "../../Utils";
import { Table } from "react-bootstrap";
import LINKS from "../../Utils/Links";
import * as XLSX from 'xlsx';
import axios from 'axios';
function Bidding() {
    const fileInputRef = useRef(null);
    const [SelectedItems, setSelectedItems] = useState([{ abc: 'abc' }])
    const [headerdata, setheaderdata] = useState({ incomtax: "" })
    const [loading, setLoading] = useState(true);
    const [TaxCodelist, setTaxCodelist] = useState()
    const [tableheader, settableheader] = useState()
    const [type, settype] = useState()
    const [uomlist, setuomlist] = useState()
    const [materialtypelist, setmaterialtypelist] = useState()
    const [tabledetails, settabledetails] = useState()
    const [update, setUpdate] = useState(1)
    const [excelData, setExcelData] = useState([])
    const API_TYPES = {
        GET: `${LINKS.api}/GetApi`,
        POST: `${LINKS.api}/POSTApi`,
        PATCH: `${LINKS.api}/PATCHApi`,
        SECONDPOST: `${LINKS.api}/SecondDBPOSTApi`,
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
        let cook = localStorage.getItem("cookie");
        if (cook) {
            TableTaxCode(cook)
            materialpackage(cook)
            getunitofmeasure(cook)
        }
    }, []);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const ItemsDropDownfunc = async (selectedList, index, name) => {
        let doclines = SelectedItems;
        if (name === "Code") {
            doclines[index]["Code"] = selectedList.value;
            doclines[index]["Name"] = selectedList.item;
            doclines[index]["LineNum"] = index;
            doclines[`ùpdate${update + 1}`] = update + 1;
            setUpdate(update + 1);
            // setSelectedItems(doclines);
            setSelectedItems([
                ...doclines,
                [],
            ]);
        } else {
            doclines[index][name] = selectedList.value;
            doclines[`ùpdate${update + 1}`] = update + 1;
            setUpdate(update + 1);
            setSelectedItems(doclines);
        }

    };

    const materialpackage = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `OMMT?$select=Code,Name`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                console.log('res.data.value', res.data.value);
                if (res.data.value) {
                    let ItemsDropDown = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Code + " : " + element.Name,
                            item: element.Name
                        });
                    });
                    setmaterialtypelist(ItemsDropDown);
                }
            })
            .catch(function (error) { });
    };
    const getunitofmeasure = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `UnitOfMeasurements?$select=Code,Name`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                console.log('res.data.value', res.data.value);
                if (res.data.value) {
                    let ItemsDropDown = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Name
                        });
                    });
                    setuomlist(ItemsDropDown);
                }
            })
            .catch(function (error) { });
    };

    const TableTaxCode = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `VatGroups?$select=Code,Name,VatGroups_Lines&$filter=Inactive eq 'tNO'`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                if (res.data.value) {
                    let ItemsDropDown = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Name + " : " + element.Code,
                            item: element,
                        });
                    });
                    setTaxCodelist(ItemsDropDown);
                }
            })
            .catch(function (error) { });
    };
    const getvaluefrominput = (e) => {
        let data = headerdata
        data[e.target.name] = e.target.value
        setheaderdata(data)
        console.log('data', data);
    }
    const getvaluefromselect = (e, name) => {
        let data = headerdata
        // data[name] = e.item?.VatGroups_Lines[0]?.Rate
        data[name] = e.value
        setheaderdata(data)
    }
    const tablegetvaluefrominput = (e, index) => {
        const updatedDetails = SelectedItems
        updatedDetails[index][e.target.name] = Number(e.target.value);
        updatedDetails[`ùpdate${update + 1}`] = update + 1;
        setUpdate(update + 1);
        setSelectedItems(updatedDetails);
    }
    const submit = async () => {
        console.log('tabledetails', SelectedItems);
        console.log('headerdata', headerdata);
        let details = []
        tabledetails.forEach(item => {
            details.push({
                "U_MTCode": item.Code,
                "U_MTName": item.Name,
                "U_Unit": item.UoM,
                "U_UnitFactor": item.Code,
                "U_Wastage": item.wastage,
                "U_Quantity": item.reqqty,
                "U_Price": item.Code,
                "U_Rate": item.unitrate
            })
        })
        let body = {
            "Code": headerdata,
            "U_Comments": headerdata?.remarks,
            "U_Unit": headerdata?.uom,
            "U_CCode": headerdata?.remarkscode,
            "U_ClientQty": headerdata?.clientqty,
            "U_Type": type,
            MMP1Collection: details
        }
        console.log('body', body);
    }
    const tableHeaders = [
        "Serial No.", "BOQ No", "BOQ Description", "UoM Client", "Quantity Client",
        "Conversion", "Unit System", "Quantity System", "ManHours Labour",
        "SubContractor Labour", "Material Package", "Consumable Package",
        "Equipment Package", "SubContractor Material", "SubContractor Consumable",
        "SubContractor Equipment", "Direct Cost", "Site Overheads", "Head Office Overheads",
        "Profit", "Escalation", "Unforeseen", "Contingencies", "PST",
        "Income Tax", "Selling Price"
    ];

    return (
        <>
            <Loader visible={loading} />
            <Header />
            <div><h1 style={{ textAlign: 'center', color: '#c32127' }}>Material Packages</h1></div>
            <div className="main_container ">
                <div className="left">
                    <div className="header_items_container">
                        <label>Code</label>
                        <input
                            type="email"
                            onChange={e => getvaluefrominput(e)}
                            className="input"
                            name="code"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Unit Of Measure</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='uom'
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Client Qty</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='clientqty'
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Type</label>
                        <Select
                            menuPortalTarget={document.body}
                            styles={CustomSelect}
                            name='Type'
                            displayValue="name"
                            onChange={e => settype(e.value)}
                            options={[
                                { label: "Material Package", value: "M" },
                                { label: "Consumable Package", value: "C" },
                                { label: "Equipment Package", value: "E" }
                            ]}
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="header_items_container">
                        <label>Remarks</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='remarks'
                            type="inout"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Remarks Code</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='remarkscode'
                            type="input"
                            className="input"
                        />
                    </div>
                    {/* <div className="header_items_container">
                        <label>Total</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='total'
                            type="input"
                            className="input"
                        />
                    </div> */}
                </div>
            </div>
            <div className="table_container " style={fixedtablediv}>
                <Table striped bordered hover>
                    <thead style={fixedtableheader}>
                        <tr style={{ ...fixedtablerow, background: "#0b9fc8" }}>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div># </div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Code </div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Name</div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>UoM</div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Unit Factor</div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Wastage</div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Required Qty</div></th>
                            <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Unit Rate</div></th>
                            {/* <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Total Amount</div></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {SelectedItems &&
                            SelectedItems.map((item, index) => (
                                <tr key={`${index}`}>
                                    <td><div className="inside_td">{index + 1}</div></td>
                                    <td> <div className="inside_td">
                                        <Select
                                            menuPortalTarget={document.body}
                                            styles={TableCustomStyle}
                                            onChange={(e) => {
                                                ItemsDropDownfunc(e, index, "Code");
                                            }}
                                            options={materialtypelist}
                                            displayValue="name"
                                        />
                                    </div></td>
                                    <td> <div className="inside_td">{item.Name}</div></td>
                                    <td> <div className="inside_td">
                                        <Select
                                            menuPortalTarget={document.body}
                                            styles={TableCustomStyle}
                                            onChange={(e) => {
                                                ItemsDropDownfunc(e, index, "UoM");
                                            }}
                                            options={uomlist}
                                            displayValue="name"
                                        />
                                    </div></td>
                                    <td> <div className="inside_td">
                                        <input
                                            type="number"
                                            onChange={e => tablegetvaluefrominput(e, index)}
                                            name='unitfactor'
                                            className="form-control"
                                        />
                                    </div></td>
                                    <td> <div className="inside_td">
                                        <input
                                            type="number"
                                            onChange={e => tablegetvaluefrominput(e, index)}
                                            name='wastage'
                                            className="form-control"
                                        /></div></td>
                                    <td> <div className="inside_td">
                                        <input
                                            type="number"
                                            onChange={e => tablegetvaluefrominput(e, index)}
                                            name='reqqty'
                                            className="form-control"
                                        /></div></td>
                                    <td> <div className="inside_td">
                                        <input
                                            type="number"
                                            onChange={e => tablegetvaluefrominput(e, index)}
                                            name='unitrate'
                                            className="form-control"
                                        /></div></td>
                                    {/* <td> <div className="inside_td"></div></td> */}

                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
            <div className="button_main_container">
                <button type="button"
                    className='custombutton'
                    tabIndex="0"
                    onClick={submit}
                >
                    Submit
                </button>
                <button type="button"
                    className='custombutton'
                >
                    Cancel
                </button>
            </div>

        </>

    );
}

export default Bidding;
