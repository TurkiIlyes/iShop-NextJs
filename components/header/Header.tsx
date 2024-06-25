

import NavBar from '../navBar/NavBar'
import MobileNavBar from '../navBar/MobileNavBar'
import MobileCategoryNavBar from '../category/MobileCategoryNavBar'

const Header = () => {
  return (
    <div className=' bg-grayscale-200 shadow-sm shadow-grayscale-500 border-b-[1px] border-grayscale-500'>
        <div className="container flex items-center pt-4 h-[105px] text-black">
          <div className=" flex flex-1 gap-5 items-center">
            <MobileCategoryNavBar />
            <h1 className='text-3xl font-bold'>iShop</h1>
          </div>

          <NavBar />
          <MobileNavBar />
          
        </div>
    </div>
  )
}

export default Header