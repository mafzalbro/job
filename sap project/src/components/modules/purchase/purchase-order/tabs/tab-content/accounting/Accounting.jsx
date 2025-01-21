import React from 'react'
import LeftSideAccounts from './LeftSideAccounts'
import RightSideAccounts from './RightSideAccounts'

const Accounting = () => {
    return (
        <div className='flex justify-between min-h-96 my-20 main'>
            <LeftSideAccounts />
            <RightSideAccounts />
        </div>
    )
}

export default Accounting
