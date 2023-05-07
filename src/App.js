import SearchBar from "./components/searchBar";
import { useState } from "react";
import Header from "./components/header";
import Footer_CTA from "./components/footer_cta";
import TopArticles from "./components/top_articles";
import Navbar from "./components/navbar";
import data from './data/blogs'
import Footer from "./components/footer";
import Sidebar from "./components/sidebar"

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  // Filter the data based on the selected domain
  const filteredData = selectedDomain ? data.filter(item => item.domain === selectedDomain) : data;

  return (
    <div className="flex-2 ">  
    <Navbar/>
    <div className="flex">
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setSelectedDomain={setSelectedDomain} />
    <div className="flex-1 ml-64 mt-10">
    <div className="container mx-auto px-4">
      <Header />
      <h2 className="text-3xl md:text-3xl font-bold">{selectedDomain ? `Blogs for ${selectedDomain}` : 'All Blogs'}</h2>
      
      <div className="py-8">
        <SearchBar
          data={filteredData}
          onSearch={(results) => setSearchResults(results)}
        />
      </div>
      {/* create two columns one for search results and other for top_articles component */}
      <div className="flex flex-col md:flex-row md:space-x-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {searchResults.length > 0
          ? searchResults.map((item) => (
              <div key={item.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* <img
                    src={item.image}
                    alt={item.title}
                    className="w-1/2 h-28 object-cover"
                  /> */}
                  <div className="p-4">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-400">{item.date}</p>
                    <a href={item.url}>link</a>
                  </div>
                </div>
              </div>
            ))
          : filteredData.map((item) => (
              <div key={item.id}>
                <div className="bg-white hover:bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <a href={item.url}>
                    {/* <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    /> */}
                    <div className="p-4">
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
      </div>
      <div  >
        <TopArticles/>
      </div>
      </div>
      <Footer_CTA/>

    </div>
    <Footer/>
    </div>
    </div>
    </div>
  );
}

export default App;
