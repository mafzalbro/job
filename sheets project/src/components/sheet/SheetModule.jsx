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
                <div>
                    <NavBar />
                    <ToolBar />
                </div>
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
                <div className='h-4 w-full border-b border-border'>

                </div>
                <Footer />
            </div>
            {/* </div> */}
        </>
    )
}

export default SheetModule
