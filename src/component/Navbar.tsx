import img from '../assets/XMENsNlQVM6niGdB5uA0y4nD3UE.png'
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-[#f1f0ee] pt-5">
      <nav className="bg-white border rounded-xl shadow dark:bg-gray-800 cursor-pointer">
        <div className="container flex items-center justify-center p-3 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a
            href="/"
            className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </a>

          <a
            onClick={() => navigate("/features")}
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            features
          </a>

          <a
             onClick={() => navigate("/pricing")}
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            pricing
          </a>

          <a
            onClick={() => navigate("/login")}
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Login
          </a>


          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <img className="w-8 h-8 fill-current" src={img} 
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
