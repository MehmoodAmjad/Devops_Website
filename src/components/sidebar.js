import cncfLogo from "./CNCFLogo.png";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineRobot } from "react-icons/ai";
import data from "../data/blogs"; // import the blogs data

function Sidebar({ isOpen, toggleSidebar, setSelectedDomain }) {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleClick(item) {
    setSelectedItem(item);
    setSelectedDomain(item.domain);
    toggleSidebar();
  }

  useEffect(() => {
    // Use the imported blogs data here
    const domains = data.map((item) => item.domain);
    const uniqueDomains = [...new Set(domains)];
    const items = uniqueDomains.map((domain) => {
      return {
        id: domain,
        title: domain,
        domain: domain,
      };
    });
    setSidebarItems(items);
  }, []);

  return (
    <div className="bg-gray-800">
      <div
        className={`fixed left-0 top-12 bottom-0 bg-gray-800 text-gray-100 transition-all duration-300 ease-in-out z-30 ${
          isOpen ? "w-64" : "w-0"
        } md:w-64`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <button
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            onClick={toggleSidebar}
          >
            <AiOutlineMenu className="h-6 w-6" />
          </button>
          <div></div>
        </div>
        <div className={`px-4 py-6 ${isOpen ? "" : "hidden"} md:block`}>
          <div>
            {/* Loop through the sidebar items */}
            <ul className="text-gray-400 uppercase font-bold mb-2">
              {sidebarItems.map((item) => (
                <li
                  key={item.id}
                  className={`mb-4 ${
                    selectedItem && selectedItem.id === item.id
                      ? "text-white"
                      : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
