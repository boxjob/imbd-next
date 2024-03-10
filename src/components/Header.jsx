import MenuItem from "./MenuItem";
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
const Header = () => {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <div className="flex gap-4">
                <MenuItem title='home' address='/' Icon={ AiFillHome } />
                <MenuItem title='info' address='/' Icon={ BsFillInfoCircleFill } />
            </div>
            <div className="flex gap-1 items-center">
                <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
                <span className="text-xl hidden sm:inline">Clone</span>
            </div>
        </div>
    );
}
 
export default Header;