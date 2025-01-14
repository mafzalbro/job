import LeftFooterArea from "./LeftFooterArea"
import RightFooterArea from "./RightFooterArea"


const Footer = () => {
    return (
        <div className='flex gap-2 justify-between flex-wrap my-10 footer-section'>
            <LeftFooterArea />
            <RightFooterArea />
        </div>
    )
}

export default Footer
