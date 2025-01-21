import BottomDrawer from "./BottomDrawer"
import FooterButtons from "./FooterButtons"
import LeftFooterArea from "./LeftFooterArea"
import RightFooterArea from "./RightFooterArea"


const Footer = () => {
    return (
        <>
            <div>

                <div className='flex gap-2 justify-between flex-wrap mt-10 footer-section !pb-0 !mb-0'>
                    <LeftFooterArea />
                    <RightFooterArea />
                </div>
                <FooterButtons />
            </div>
            <BottomDrawer />
        </>
    )
}

export default Footer
