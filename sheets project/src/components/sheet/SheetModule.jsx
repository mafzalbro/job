import React from 'react'
import HeaderSection from './HeaderSection'
import HeaderSection2 from './HeaderSection2'
import Tabs from './tabs/tabs'
// import Table from './table/contents/Table'
import Footer from "./footer/Footer"
import Button from '../common/Button'

const SheetModule = () => {
    return (
        <div>
            <h2 className='text-4xl text-center my-10 flex justify-start pl-6 items-center gap-4'>
                <img src="nitsel-icon.svg" alt="nitsel-icon" className='w-10' />
                <span>Nitsel's SAP</span>
            </h2>
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
    )
}

export default SheetModule
