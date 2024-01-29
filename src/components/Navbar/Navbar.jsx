import { FaHome } from "react-icons/fa";

const Navbar = () => {
    return (
       <div className="relative h-screen w-52 bg-stone-500">
            <p className="absolute text-2xl text-white border-2 rounded-full cursor-pointer top-9 w-7">
                <FaHome></FaHome>
            </p> 
       </div>
    );
};

export default Navbar;