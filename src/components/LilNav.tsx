import { Link } from "react-router";

const LilNav = () => {
  return (
    <>
                <Link to="/courses" className="glass flex-grow max-w-[200px] z-10 hover:bg-[#12121212] rounded-lg my-10 p-4 w-[120px] cursor-pointer">
                   <p className="text-center">📖</p>
                   <p className="text-center text-sm">Study Hub</p>
                 </Link>
                 <Link to="/market" className="glass flex-grow max-w-[200px] z-10 hover:bg-[#12121212] rounded-lg my-10 p-4 w-[120px] cursor-pointer">
                   <p className="text-center">🏦</p>
                   <p className="text-center text-sm">Marketplace</p>
                 </Link>
                 <Link to="" className="glass flex-grow max-w-[200px] z-10 hover:bg-[#12121212] rounded-lg my-10 p-4 w-[120px] cursor-pointer">
                   <p className="text-center">📄</p>
                   <p className="text-center text-sm">Blog</p>
                 </Link>
                 <Link to="/courses" className="glass flex-grow max-w-[200px] z-10 hover:bg-[#12121212] rounded-lg my-10 p-4 w-[120px] cursor-pointer">
                   <p className="text-center">📖</p>
                   <p className="text-center text-sm">Study Hub</p>
                 </Link>
                 <Link to="/market" className="glass flex-grow max-w-[200px] z-10 hover:bg-[#12121212] rounded-lg my-10 p-4 w-[120px] cursor-pointer">
                   <p className="text-center">🏦</p>
                   <p className="text-center text-sm">Marketplace</p>
                 </Link>
                 <Link to="" className="glass flex-grow max-w-[200px] z-10 hover:bg-[#12121212] rounded-lg my-10 p-4 w-[120px] cursor-pointer">
                   <p className="text-center">📄</p>
                   <p className="text-center text-sm">Blog</p>
                 </Link>   
    </>
  );
}

export default LilNav;
