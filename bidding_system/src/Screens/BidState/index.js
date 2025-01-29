import React, { useEffect, useState, useRef } from 'react'
import Select from "react-select";
import "./index.css";
import { ImArrowRight } from "react-icons/im";
import { Loader, CustomSelect, TableCustomStyle, Header, fixedtablediv, fixedtableheader, fixedtablerow } from "../../Utils";
import {
    Table,
    Modal,
} from "react-bootstrap";
import LINKS from "../../Utils/Links";
import * as XLSX from 'xlsx';
import axios from 'axios';
import { useAlert } from "react-alert";
function Bidding() {
    const alert = useAlert();
    const fileInputRef = useRef(null);
    const [SelectedItems, setSelectedItems] = useState([{ abc: 'abc' }])
    const [headerdata, setheaderdata] = useState({ incomtax: 7.5, federal: 18 })
    const [loading, setLoading] = useState(true);
    const [TaxCodelist, setTaxCodelist] = useState()
    const [selectedMP, setselectedMP] = useState()
    const [tableheader, settableheader] = useState()
    const [tabledetails, settabledetails] = useState()
    const [update, setUpdate] = useState(1)
    const [show3, setShow3] = useState(false);
    const [getMPlist, setgetMPlist] = useState()
    const [getCPlist, setgetCPlist] = useState()
    const [getEPlist, setgetEPlist] = useState()
    const [getSPlist, setgetSPlist] = useState()

    const [getMPprices, setgetMPprices] = useState()
    const [getCPprices, setgetCPprices] = useState()
    const [getEPprices, setgetEPprices] = useState()
    const [getSPprices, setgetSPprices] = useState()
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
            consumablepackage(cook)
            equipmentpackage(cook)
            specializedpackage(cook)
        }
    }, []);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleClose3 = () => {
        setShow3(false);
    };
    const handleFileChange2 = (e) => {
        setLoading(true)
        // const selectedFile = e.target.files[0];
        const file = e.target.files[0];
        const reader = new FileReader();
        const dataarrange = []
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            setExcelData(jsonData);
            console.log('jsonData', jsonData[0]);
            const existingHeaders = jsonData[0];
            const additionalHeaders = ['Quantity Client', 'Conversion', 'Unit System', 'Quantity System', 'Material Package', 'Consumable Package', 'Equipment Package', 'ManHours Labour'
                , 'SubContractor Labour', 'Package Material', 'SubContractor Material', 'Package Consumable', 'SubContractor Consumable', 'Package Equipment', 'SubContractor Equipment', 'Direct Cost'
                , 'Site Overheads', 'Profit', 'PST', 'Income Tax'];
            const additionalValues = {
                'Quantity_Client': '',
                'Conversion': '',
                'Unit_System': '',
                'Quantity_System': '',
                'Material_Package': '',
                'Consumable_Package': '',
                'Equipment_Package': '',
                'ManHours_Labour': '',
                'SubContractor_Labour': '',
                'Package_Material': '',
                'SubContractor_Material': '',
                'Package_Consumable': '',
                'SubContractor_Consumable': '',
                'Package_Equipment': '',
                'SubContractor_Equipment': '',
                'Direct_Cost': '',
                'Site_Overheads': '',
                'Profit': '',
                'PST': '',
                'Income_Tax': '',
            };
            const allHeaders = [...existingHeaders, ...additionalHeaders];
            settableheader(allHeaders);
            console.log('allHeaders', allHeaders);
            const filteredDataArray = jsonData.filter(item => item.length > 0);
            // Define the property names
            const propertyNames = jsonData[0];
            filteredDataArray.shift();
            // Transforming the data dynamically
            const formatPropertyName = name => (typeof name === 'string' ? name.replace(/\s/g, '_') : name);
            const transformedData = filteredDataArray.map(dataArrayItem => {
                const transformedObject = {};
                propertyNames.forEach((propertyName, index) => {
                    const formattedPropertyName = formatPropertyName(propertyName);
                    console.log('formattedPropertyName', formattedPropertyName);
                    transformedObject[formattedPropertyName === "PUNJAB_RURAL_SUSTAINABLE_WATER_SUPPLY_&_SANITATION_PROJECT_(PRSWSSP)" ? "BOQName" : formattedPropertyName] = dataArrayItem[index];

                });
                Object.assign(transformedObject, additionalValues);
                return transformedObject;
            });
            setLoading(false)
            console.log('transformedData', transformedData.slice(0, 10));
            settabledetails(transformedData.slice(0, 10));
        }
        reader.readAsArrayBuffer(file);
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert the sheet to JSON, keeping empty cells as empty strings
            const jsonData = XLSX.utils.sheet_to_json(sheet, {
                header: 1, // Keep it as an array of arrays
                defval: ''  // Ensure empty cells are kept as empty strings
            });

            // Find the index of the row where the first column contains "Sr.No"
            const srNoRowIndex = jsonData.findIndex(row => row[0] === "Sr.No");

            // If "Sr.No" row is found, slice the data from the next row onward
            let filteredDataArray = [];
            if (srNoRowIndex !== -1) {
                filteredDataArray = jsonData.slice(srNoRowIndex + 1);
            } else {
                // If "Sr.No" is not found, use the original data
                filteredDataArray = jsonData;
            }

            // Optional: Further filter out rows that are completely empty
            filteredDataArray = filteredDataArray.filter(row => row.some(cell => cell !== ''));

            settabledetails(filteredDataArray);
            console.log('filteredDataArray', filteredDataArray);
            // filteredDataArray.forEach((element) => {
            //     console.log('element', element[2]);
            // });
        };
        reader.readAsArrayBuffer(file);
    };

    const materialpackage = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `OMMP?$select=Code,U_Comments,U_DocTotal &$filter=U_Type eq 'M'`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                console.log('res.data.value', res);
                if (res.data.value) {
                    let ItemsDropDown = [];
                    let ItemPrices = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Code + " : " + element.U_Comments,
                        });
                        ItemPrices[element.Code] = {
                            U_DocTotal: element.U_DocTotal
                        }
                    });
                    console.log('ItemPrices', ItemPrices);
                    setgetMPprices(ItemPrices)
                    setgetMPlist(ItemsDropDown);
                } else {
                    if (res.data.error.message === "Invalid session or session already timeout.") {
                        alert.error(res.data.error.message)
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 3000);
                    } else {
                        alert.error(res.data.error.message)
                    }
                }
            })
            .catch(function (error) { });
    };
    const consumablepackage = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `OMMP?$select=Code,U_Comments,U_DocTotal &$filter=U_Type eq 'C'`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                console.log('res.data.value', res);
                if (res.data.value) {
                    let ItemsDropDown = [];
                    let ItemPrices = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Code + " : " + element.U_Comments,
                        });
                        ItemPrices[element.Code] = {
                            U_DocTotal: element.U_DocTotal
                        }
                    });
                    setgetCPprices(ItemPrices)
                    setgetCPlist(ItemsDropDown);
                } else {
                    if (res.data.error.message === "Invalid session or session already timeout.") {
                        alert.error(res.data.error.message)
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 3000);
                    } else {
                        alert.error(res.data.error.message)
                    }
                }
            })
            .catch(function (error) { });
    };
    const equipmentpackage = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `OMMP?$select=Code,U_Comments,U_DocTotal &$filter=U_Type eq 'E'`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                console.log('res.data.value', res);
                if (res.data.value) {
                    let ItemsDropDown = [];
                    let ItemPrices = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Code + " : " + element.U_Comments,
                        });
                        ItemPrices[element.Code] = {
                            U_DocTotal: element.U_DocTotal
                        }
                    });
                    setgetEPprices(ItemPrices)
                    setgetEPlist(ItemsDropDown);
                } else {
                    if (res.data.error.message === "Invalid session or session already timeout.") {
                        alert.error(res.data.error.message)
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 3000);
                    } else {
                        alert.error(res.data.error.message)
                    }
                }
            })
            .catch(function (error) { });
    };
    const specializedpackage = async (cook) => {
        // -------------------------    Items API GET DATA   ------------------------------------------------------
        let SAPApi = `OMMP?$select=Code,U_Comments,U_DocTotal &$filter=U_Type eq 'S'`;
        await axios
            .post(API_TYPES.GET, {
                api: SAPApi,
                cookie: cook,
            })
            .then(function (res) {
                if (res.data.value) {
                    let ItemsDropDown = [];
                    let ItemPrices = [];
                    res.data.value.forEach((element) => {
                        ItemsDropDown.push({
                            value: element.Code,
                            label: element.Code + " : " + element.U_Comments
                        });
                        ItemPrices[element.Code] = {
                            U_DocTotal: element.U_DocTotal
                        }
                    });
                    console.log('ItemsDropDown', ItemsDropDown);
                    setgetSPprices(ItemPrices)
                    setgetSPlist(ItemsDropDown);
                } else {
                    if (res.data.error.message === "Invalid session or session already timeout.") {
                        alert.error(res.data.error.message)
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 3000);
                    } else {
                        alert.error(res.data.error.message)
                    }
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
        data[e.target.name] = e.target
            .value
        setheaderdata(data)
    }
    const getvaluefromselect = (e, name) => {
        let data = headerdata
        // data[name] = e.item?.VatGroups_Lines[0]?.Rate
        data[name] = e.value
        setheaderdata(data)
    }
    const tablegetvaluefrominput = (e, index) => {
        const updatedDetails = [...tabledetails];
        updatedDetails[index][e.target.name] = Number(e.target.value);
        const directCostFields = ['ManHours_Labour', 'SubContractor_Labour', 'Package_Material', 'SubContractor_Material', 'Package_Consumable',
            'SubContractor_Consumable', 'Package_Equipment', 'SubContractor_Equipment'];
        updatedDetails[index]['Direct_Cost'] = directCostFields.reduce((sum, field) => sum + Number(updatedDetails[index][field]), 0);
        updatedDetails[index]['Site_Overheads'] = updatedDetails[index]['Direct_Cost'] * headerdata?.siteoverheads
        updatedDetails[index]['Profit'] = (updatedDetails[index]['Site_Overheads'] + updatedDetails[index]['Direct_Cost']) * headerdata?.profit
        updatedDetails[index]['PST'] = ((updatedDetails[index]['Direct_Cost'] + updatedDetails[index]['Site_Overheads'] + updatedDetails[index]['Profit']) / (1 - headerdata?.PST)) -
            (updatedDetails[index]['Direct_Cost'] + updatedDetails[index]['Site_Overheads'] + updatedDetails[index]['Profit'])
        updatedDetails[index]['Income_Tax'] = ((updatedDetails[index]['Direct_Cost'] + updatedDetails[index]['Site_Overheads'] + updatedDetails[index]['Profit'] + updatedDetails[index]['PST'])
            / (1 - headerdata?.incomtax)) -
            (updatedDetails[index]['Direct_Cost'] + updatedDetails[index]['Site_Overheads'] + updatedDetails[index]['Profit'] + updatedDetails[index]['PST'])
        settabledetails(updatedDetails);
    }
    const submit = async () => {
        console.log('tabledetails', tabledetails);
        console.log('headerdata', headerdata);
        // let details = []
        // tabledetails.forEach(item => {
        //     details.push({
        //         U_BOQNo: item.U_BOQNo,
        //         U_QuantityClient: item.Quantity_Client,
        //         U_Conversion: item.Conversion,
        //         U_UnitSystem: item.Unit_System,
        //         U_QuantitySystem: item.Quantity_System,
        //         U_MaterialPackage: item.Material_Package,
        //         U_ConsumablePackage: item.Consumable_Package,
        //         U_EquipmentPackage: item.Equipment_Package,
        //         U_ManHoursLabour: item.ManHours_Labour,
        //         U_SubContractorLabour: item.SubContractor_Labour,
        //         U_PackageMaterial: item.Package_Material,
        //         U_SubContractorMaterial: item.SubContractor_Material,
        //         U_PackageConsumable: item.Package_Consumable,
        //         U_SubContractorConsumable: item.SubContractor_Consumable,
        //         U_PackageEquipment: item.Package_Equipment,
        //         U_SubContractorEquipment: item.SubContractor_Equipment,
        //         U_DirectCost: item.Direct_Cost,
        //         U_SiteOverheads: item.Site_Overheads,
        //         U_Profit: item.Profit,
        //         U_PST: item.PST
        //     })
        // })
        // let body = {
        //     // U_QuotationNo: headerdata?. null,
        //     U_ClientName: headerdata?.clientname,
        //     U_ContractType: headerdata?.Contracttype,
        //     U_ConstructionPeriod: headerdata?.constructionperiod,
        //     U_FurnishedMaterial: headerdata?.FurnishedMaterial,
        //     U_Escalation: headerdata?.Escalation,
        //     U_SiteOverHeads: headerdata?.siteoverheads,
        //     U_ReceivedDate: headerdata?.receiveddate,
        //     U_SubmissionDate: headerdata?.submissiondate,
        //     U_Profit: headerdata?.profit,
        //     U_PST: headerdata?.PST,
        //     U_IncomeTax: headerdata?.incomtax,
        //     U_ProjectLocation: headerdata?.location,
        //     EBS1Collection: details
        // }
        // console.log('body', body);
    }
    const tableHeaders = [//"BOQ No",
        "Serial No.", "BOQ Description", "UoM Client", "Quantity Client",
        "Conversion", "Unit System", "Quantity System", "ManHours", "Rate ManHours",
        "SubContractor Labour", "Material Package", "Consumable Package",
        "Equipment Package", "Specialized/ Sub-Contract", "Labour Cost", "Material Cost", "Consumable Cost",
        "Equipment Cost", "Specialized/ Sub-Contract Cost", "Direct Cost"
    ];
    const handlechange = (item, event, name, index) => {

        // event["ClientQty"] = item[4]
        // event["ManHours"] = item[8].toFixed(2)
        // event["ParentIndex"] = index
        // setselectedMP(event)
        // console.log('Comment', event);
        // // setShow3(true);
        // let lines = tabledetails
        // let pricelist = []
        // console.log('Comment', event.item.MMP1Collection);
        // event.item.MMP1Collection.forEach((element) => {
        //     console.log("element", element)
        //     console.log("element33333333", (element.U_UnitFactor + (element.U_UnitFactor * element.U_Wastage / 100)) * item[4])
        //     pricelist.push({
        //         ReqQty: ((element.U_UnitFactor + (element.U_UnitFactor * element.U_Wastage / 100)) * item[4]).toFixed(2)
        //         // TotalAmount: (((element.U_UnitFactor + (element.U_UnitFactor * element.U_Wastage / 100)) * item[4]).toFixed(2) * item[13])
        //     })
        // });
        // console.log('pricelist', pricelist);
        // setShow3(true);
    }
    const getmpvalues = (e, index, clientqty, ManHours) => {

        // ((item.U_UnitFactor + (item.U_UnitFactor * item.U_Wastage / 100)) * selectedMP?.ClientQty).toFixed(2) * Number(item.UnitRate || 1) 
        let data = selectedMP
        data.item.MMP1Collection[index]["UnitRate"] = e.target.value
        let unitrate = data.item.MMP1Collection[index]["UnitRate"]
        let unitfactor = data.item.MMP1Collection[index]["U_UnitFactor"]
        let wastage = data.item.MMP1Collection[index]["U_Wastage"]
        data.item.MMP1Collection[index]["LineTotal"] = ((unitfactor + (unitfactor * wastage / 100)) * clientqty).toFixed(2) * Number(unitrate || 1)
        data.item[`ùpdate${update + 1}`] = update + 1;
        setUpdate(update + 1);
        let sum = 0;
        data.item.MMP1Collection.forEach((element) => {
            if (element.LineTotal) {
                sum = sum + Number(element.LineTotal);
            }

        });
        data.item["DocTotal"] = sum
        console.log("updated", data)
        tabledetails[data.ParentIndex]["MPRate"] = sum
        tabledetails[data.ParentIndex]["DirectCost"] = Number((Number(sum + ManHours)).toFixed(2))
        tabledetails[data.ParentIndex]["SiteOverHeades"] = Number((tabledetails[data.ParentIndex]["DirectCost"] * 0.2).toFixed(2))
        tabledetails[data.ParentIndex]["HeadOfficeOverHeads"] = Number(((tabledetails[data.ParentIndex]["DirectCost"] + tabledetails[data.ParentIndex]["SiteOverHeades"]) * 0.1).toFixed(2))
        tabledetails[data.ParentIndex]["Escalation"] = Number(((tabledetails[data.ParentIndex]["DirectCost"] + tabledetails[data.ParentIndex]["HeadOfficeOverHeads"]) * 0.1).toFixed(2))
        tabledetails[data.ParentIndex]["Unforeseen"] = Number(((tabledetails[data.ParentIndex]["DirectCost"] + tabledetails[data.ParentIndex]["Escalation"]) * 0.05).toFixed(2))
        tabledetails[data.ParentIndex]["Contingencies"] = Number(((tabledetails[data.ParentIndex]["DirectCost"] + tabledetails[data.ParentIndex]["Unforeseen"]) * 0.03).toFixed(2))
        tabledetails[data.ParentIndex]["Profit"] = Number((tabledetails[data.ParentIndex]["DirectCost"] * 0.05).toFixed(2))
        console.log("tabledetails", tabledetails)
        setselectedMP(data)
    }
    return (
        <>
            <Loader visible={loading} />
            <Header />
            <div><h1 style={{ textAlign: 'center', color: '#c32127' }}>Bidding System</h1></div>
            <div className="main_container ">
                <div className="left">
                    <div className="header_items_container">
                        <label>Quotation No</label>
                        <input
                            type="email"
                            readOnly
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Client Name</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='clientname'
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Contract Type</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='Contracttype'
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Construction Period</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='constructionperiod'
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Owner Furnished Material</label>
                        <Select
                            menuPortalTarget={document.body}
                            styles={CustomSelect}
                            name='FurnishedMaterial'
                            displayValue="name"
                            isMulti
                            options={[
                                { label: "Cement", value: "C" },
                                { label: "Steel", value: "S" },
                                { label: "Other", value: "O" }
                            ]}
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Escalation</label>
                        <Select
                            name='Escalation'
                            menuPortalTarget={document.body}
                            styles={CustomSelect}
                            onChange={e => console.log('Comment', e)}
                            options={[
                                { label: "Rebar", value: "Rebar" },
                                { label: "Cement", value: "Cement" },
                                { label: "Diesel", value: "Diesel" },
                                { label: "Petrol", value: 'Petrol' },
                                { label: "Labour", value: 'Labour' },
                                { label: "Masan", value: 'Masan' },
                            ]}
                            displayValue="name"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Site OverHeads</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='siteoverheads'
                            type="input"
                            className="input"
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="header_items_container">
                        <label>Received Date</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='receiveddate'
                            type="date"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Submission Date</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='submissiondate'
                            type="date"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Profit</label>
                        <input
                            onChange={e => getvaluefrominput(e)}
                            name='profit'
                            type="input"
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>PST</label>
                        <Select
                            menuPortalTarget={document.body}
                            styles={CustomSelect}
                            // options={TaxCodelist}
                            onChange={e => getvaluefromselect(e, 'PST')}
                            options={[
                                { label: "Sindh 13%", value: 13 },
                                { label: "KPK 15%", value: 15 },
                                { label: "Punjab 16%", value: 16 },
                                { label: "Balochistan 15%", value: 15 },
                            ]}
                            displayValue="name"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Income Tax</label>
                        <input
                            defaultValue={headerdata?.incomtax + '%'}
                            type="input"
                            // options={TaxCodelist}
                            onChange={e => getvaluefrominput(e)}
                            name='incomtax'
                            readOnly
                            className="input"
                        />
                    </div>
                    <div className="header_items_container">
                        <label>Project Location</label>
                        <input
                            type="input"
                            onChange={e => getvaluefrominput(e)}
                            name='location'
                            className="input"
                        />
                    </div>
                </div>
                <Modal show={show3} onHide={handleClose3}>
                    <Modal.Header closeButton>
                        <Modal.Title>Material Package Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="main_container ">
                            <div className="left">
                                <div className="header_items_container">
                                    <label>Material Package Code</label>
                                    <input
                                        type="email"
                                        readOnly
                                        value={selectedMP?.value}
                                        className="input"
                                    />
                                </div>
                                <div className="header_items_container">
                                    <label>Name</label>
                                    <input
                                        readOnly
                                        value={selectedMP?.item.U_Comments}
                                        type="text"
                                        className="input"
                                    />
                                </div>
                                <div className="header_items_container">
                                    <label>Code</label>
                                    <input
                                        readOnly
                                        value={selectedMP?.item.U_CCode}
                                        type="text"
                                        className="input"
                                    />
                                </div>
                                <div className="header_items_container">
                                    <label>Quantity</label>
                                    <input
                                        readOnly
                                        value={selectedMP?.ClientQty}
                                        type="text"
                                        className="input"
                                    />
                                </div>
                                <div className="header_items_container">
                                    <label>Total</label>
                                    <input
                                        value={selectedMP?.item.DocTotal}
                                        name='receiveddate'
                                        type="text"
                                        className="input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="table_container " style={fixedtablediv}>
                            <Table striped bordered hover>
                                <thead style={fixedtableheader}>
                                    <tr style={{ ...fixedtablerow, background: "#0b9fc8" }}>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>#</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Material Type</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>UoM</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Unit Factor</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Wastage %</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Required Quantity</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Unit Rate</div></th>
                                        <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Total Amount</div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedMP &&
                                        selectedMP.item.MMP1Collection.map((item, index) => (
                                            <tr key={`${index}`}>
                                                <td><div className="inside_td">{index + 1}</div></td>
                                                <td> <div className="inside_td">{item.U_MTCode}</div></td>
                                                <td> <div className="inside_td">{item.U_Unit}</div></td>
                                                <td> <div className="inside_td">{item.U_UnitFactor}</div></td>
                                                <td> <div className="inside_td">{item.U_Wastage}</div></td>
                                                <td> <div className="inside_td">{((item.U_UnitFactor + (item.U_UnitFactor * item.U_Wastage / 100)) * selectedMP?.ClientQty).toFixed(2)}</div></td>
                                                <td> <div className="inside_td"> <input
                                                    onChange={e => getmpvalues(e, index, selectedMP?.ClientQty, selectedMP?.ManHours)}
                                                    name='UnitRate'
                                                    type="number"
                                                    style={{ border: 'none', borderColor: '#ffffff' }}
                                                    className="input"
                                                /></div></td>
                                                <td> <div className="inside_td">{item.LineTotal}</div></td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </div>
                        <div className="button_main_container">
                            <button type="button"
                                className='custombutton'
                                tabIndex="0"
                                onClick={handleClose3}
                            >
                                OK
                            </button>
                            <button type="button"
                                className='custombutton'
                            >
                                Cancel
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <div className="button_main_container">
                <button
                    type="button"
                    className='custombutton'
                    onClick={handleButtonClick}
                >
                    Import File
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <div className="table_container " style={fixedtablediv}>
                {tabledetails && tabledetails.length > 0 ? (<Table striped bordered hover>
                    <thead style={fixedtableheader}>
                        <tr style={{ ...fixedtablerow, background: "#0b9fc8" }}>
                            {tableHeaders.map((header, index) => (
                                <th key={index} style={{ backgroundColor: '#0b9fc8', color: 'white' }}>
                                    <div>{header}</div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tabledetails.map((item, index) => (
                            <tr key={index + 1}>
                                <td><div className="inside_td">{index + 1}</div></td>
                                <td><div className="inside_td">{item[1]}</div></td>
                                <td><div className="inside_td">{item[2]}</div></td>
                                <td><div className="inside_td">{item[3]}</div></td>
                                <td><div className="inside_td">{item[4] ? item[4].toFixed(2) : null}</div></td>
                                <td><div className="inside_td">{item[5]}</div></td>
                                <td><div className="inside_td">{item[6]}</div></td>
                                <td><div className="inside_td">{item[7] ? item[7].toFixed(2) : null}</div></td>
                                <td><div className="inside_td">{item[8] ? item[8].toFixed(2) : null}</div></td>
                                <td><div className="inside_td">{item[9]}</div></td>
                                <td><div className="inside_td">
                                    {getMPlist && getMPlist ? (
                                        <Select
                                            menuPortalTarget={document.body}
                                            styles={TableCustomStyle}
                                            value={getMPlist.filter(
                                                (option) =>
                                                    option.value === item[10]
                                            )}
                                            onChange={e => handlechange(item, e, 'MPCode', index)}
                                            options={getMPlist}
                                            displayValue="name"
                                        />) : <Select
                                        menuPortalTarget={document.body}
                                        styles={TableCustomStyle}
                                        onChange={e => handlechange(item, e, 'MPCode', index)}
                                        options={getMPlist}
                                        displayValue="name"
                                    />}
                                </div></td>
                                <td><div className="inside_td">

                                    {getCPlist && getCPlist && item[11] ? (
                                        <>
                                            <ImArrowRight
                                                onClick={() => { console.log("test", item[11]) }}
                                            />
                                            <Select
                                                menuPortalTarget={document.body}
                                                styles={TableCustomStyle}
                                                value={getCPlist.filter(
                                                    (option) =>
                                                        option.value === item[11]
                                                )}
                                                onChange={e => handlechange(item, e, 'CPCode', index)}
                                                options={getCPlist}
                                                displayValue="name"
                                            />
                                        </>) : <Select
                                        menuPortalTarget={document.body}
                                        styles={TableCustomStyle}
                                        onChange={e => handlechange(item, e, 'CPCode', index)}
                                        options={getCPlist}
                                        displayValue="name"
                                    />}
                                </div></td>
                                <td><div className="inside_td">
                                    {getEPlist && getEPlist ? (
                                        <Select
                                            menuPortalTarget={document.body}
                                            styles={TableCustomStyle}
                                            value={getEPlist.filter(
                                                (option) =>
                                                    option.value === item[12]
                                            )}
                                            onChange={e => handlechange(item, e, 'EPCode', index)}
                                            options={getEPlist}
                                            displayValue="name"
                                        />) : <Select
                                        menuPortalTarget={document.body}
                                        styles={TableCustomStyle}
                                        onChange={e => handlechange(item, e, 'EPCode', index)}
                                        options={getEPlist}
                                        displayValue="name"
                                    />}
                                </div></td>
                                <td><div className="inside_td">
                                    {getSPlist && getSPlist ? (
                                        <Select
                                            menuPortalTarget={document.body}
                                            styles={TableCustomStyle}
                                            value={getSPlist.filter(
                                                (option) =>
                                                    option.value === item[13]
                                            )}
                                            options={getSPlist}
                                            displayValue="name"
                                        />) : <Select
                                        menuPortalTarget={document.body}
                                        styles={TableCustomStyle}
                                        onChange={e => handlechange(item, e, 'SPCode', index)}
                                        options={getSPlist}
                                        displayValue="name"
                                        placeholder="select"
                                    />}
                                </div></td>
                                <td><div className="inside_td">{item[7] * item[8]}</div></td>
                                <td><div className="inside_td">{getMPprices && getMPprices[item[10]]?.U_DocTotal}</div></td>
                                <td><div className="inside_td">{getCPprices && getCPprices[item[11]]?.U_DocTotal}</div></td>
                                <td><div className="inside_td">{getEPprices && getEPprices[item[12]]?.U_DocTotal}</div></td>
                                <td><div className="inside_td">{getSPprices && getSPprices[item[13]]?.U_DocTotal}</div></td>

                                {/*------------------------ Formula Start from Here ----------------------------*/}
                                <td> <div className="inside_td">
                                    {Number(item[7] * item[8]) + Number(getMPprices[item[10]]?.U_DocTotal || 0) + Number(getCPprices[item[11]]?.U_DocTotal || 0)
                                        + Number(getEPprices[item[12]]?.U_DocTotal || 0) + Number(getSPprices[item[13]]?.U_DocTotal || 0)}
                                </div></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>) : (
                    <Table striped bordered hover>
                        <thead style={fixedtableheader}>
                            <tr style={{ ...fixedtablerow, background: "#0b9fc8" }}>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Serial No.</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>BOQ No</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>BOQ Description</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>UoM Client</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Quantity Client</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Conversion</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Unit System</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Quantity System</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>ManHours Labour</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>SubContractor Labour</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Material Package</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Consumable Package</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Equipment Package</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>SubContractor Material</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>SubContractor Consumable</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>SubContractor Equipment</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Direct Cost</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Site Overheads</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Head Office Overheads</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Profit</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Escalation</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Unforeseen</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Contingencies </div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>PST</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Income Tax</div></th>
                                <th style={{ backgroundColor: '#0b9fc8', color: 'white' }}><div>Selling Price</div></th>



                            </tr>
                        </thead>
                        <tbody>
                            {SelectedItems &&
                                SelectedItems.map((item, index) => (
                                    <tr key={`${index}`}>
                                        <td><div className="inside_td">{index + 1}</div></td>
                                        <td> <div className="inside_td"></div></td>
                                        {/* <td> <div className="inside_td"></div></td> */}
                                        {/* <td> <div className="inside_td"></div></td> */}
                                        {/* <td> <div className="inside_td"></div></td> */}
                                        {/* <td> <div className="inside_td"></div></td> */}
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                        <td> <div className="inside_td"></div></td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>)}

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
