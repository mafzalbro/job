import LeftSideHeader2 from './header2/LeftSideHeader2.jsx';
import RightSideHeader2 from './header2/RightSideHeader2.jsx';

const HeaderSection = () => {
    return (
        <div className='flex justify-between my-10 header-section'>
            <LeftSideHeader2 />
            <RightSideHeader2 />
        </div>
    )
}

export default HeaderSection