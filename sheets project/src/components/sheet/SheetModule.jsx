import React from 'react'
import HeaderSection from './HeaderSection'
import HeaderSection2 from './HeaderSection2'
import Tabs from './tabs/tabs'
import Table from './table/contents/Table'
import Footer from "./footer/Footer"

const SheetModule = () => {
    return (
        <div>
            <HeaderSection />
            <HeaderSection2 />
            <Tabs />
            {/* <Table /> */}
            <Footer />
        </div>
    )
}

export default SheetModule
