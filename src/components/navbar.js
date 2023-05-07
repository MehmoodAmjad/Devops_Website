import cncfLogo from "./CNCFLogo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="fixed top-2 left-2">
            <img 
              src = {cncfLogo} 
              alt = "CNCF Islamabad Logo"
              className="w-8 h-8"
            />
          </div>
          <a href="/" className="text-xl font-bold text-white ml-2 fixed left-10">
             CNCF Islamabad
          </a>
        </div>
        <div className="md:flex flex-col md:flex-row md:-mx-4">
          <a href="/" className="my-1 text-gray-300 hover:text-white md:mx-4 md:my-0">
            Home
          </a>
          <a href="/about" className="my-1 text-gray-300 hover:text-white md:mx-4 md:my-0">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
