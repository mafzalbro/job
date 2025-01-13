import LeftSideHeader from './header/LeftSideHeader.jsx';
import RightSideHeader from './header/RightSideHeader';
import LeftSideHeader2 from './header2/LeftSideHeader2.jsx';
import RightSideHeader2 from './header2/RightSideHeader2.jsx';

const HeaderSection = () => {
    return (
        <div className='flex justify-between gap-4 header-section'>
            <div>
                <LeftSideHeader />
                <LeftSideHeader2 />
            </div>
            <div>
                <RightSideHeader />
                <RightSideHeader2 />
            </div>
        </div>
    )
}

export default HeaderSection