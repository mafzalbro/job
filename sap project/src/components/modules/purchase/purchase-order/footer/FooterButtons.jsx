import React from 'react'
import Button from '../../../../common/Button'

const FooterButtons = () => {
    return (
        <div className='flex gap-2 justify-between px-4 my-4 flex-wrap mx-auto pb-12'>
            <div className='flex gap-2 my-2'>
                <Button>Add & New</Button>
                <Button variant='secondary' disabled>Add Draft & New</Button>
                <Button>Cancel</Button>
            </div>
            <div className='flex gap-2 my-2 justify-end'>
                <Button variant='secondary' disabled>Copy From</Button>
                <Button variant='secondary' disabled>Copy To</Button>
            </div>
        </div>
    )
}

export default FooterButtons
