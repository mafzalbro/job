import React from 'react'
import HeaderSection from './HeaderSection'
import Tabs from './tabs/Tabs'
import Footer from "./footer/Footer"
import ModuleHeading from "../../../common/ModuleHeading"
// import Button from '../../../common/Button'
// import Sidebar from './navigation/Sidebar'

const PurchaseOrderModule = () => {
    return (
        <>
            <div>
                {/* <div> */}
                {/* <Sidebar /> */}
                {/* <div className='flex gap-2'>
                <Button variant='danger'>Danger</Button>
                <Button variant='warning'>Warning</Button>
                <Button disabled>disabled</Button>
                <Button>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                </div> */}

                <div className='mt-24'>
                <ModuleHeading heading={"Purchase Order"}/>
                </div>
                <HeaderSection />
                {/* <HeaderSection2 /> */}
                <Tabs />
                {/* <Table /> */}
                <div className='h-4 w-full border-b border-border' />

                <Footer />
            </div>
            {/* </div> */}
        </>
    )
}

export default PurchaseOrderModule