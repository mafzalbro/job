import LeftSideHeader from './header/LeftSideHeader.jsx';
import RightSideHeader from './header/RightSideHeader';

const HeaderSection = () => {
    return (
        <div className='flex justify-between gap-4 header-section'>
            <LeftSideHeader />
            <RightSideHeader />
        </div>
    )
}

export default HeaderSection