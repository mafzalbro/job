import React from 'react'
import HeaderSection from './HeaderSection'
import Tabs from './tabs/Tabs'
import Footer from "./footer/Footer"
import NavBar from "./navigation/Navbar"
import ToolBar from "./navigation/ToolBar"
// import Sidebar from './navigation/Sidebar'

const SheetModule = () => {
    return (
        <>
            <div>
                <NavBar />
                <ToolBar />
                {/* <div> */}
                {/* <Sidebar /> */}
                {/* <div className='flex gap-2'>
                <Button variant='danger'>Danger</Button>
                <Button variant='warning'>Warning</Button>
                <Button disabled>disabled</Button>
                <Button>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                </div> */}


                <HeaderSection />
                {/* <HeaderSection2 /> */}
                <Tabs />
                {/* <Table /> */}
                <Footer />
            </div>
            {/* </div> */}
        </>
    )
}

export default SheetModule
