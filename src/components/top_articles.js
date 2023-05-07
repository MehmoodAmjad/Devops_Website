import articles from '../data/articles'
function TopArticles() {
  

  return (
    <div className=" bg-gray-100 px-2 py-4 rounded-md w-full md:w-3/4 ">
      <h2 className="text-lg font-bold mb-4">Top Articles</h2>
      {articles.map((article) => (
        <div key={article.id} className="mb-4">
          <img src={article.image} alt={article.title} className="w-full rounded-md" />
          <h3 className="text-base font-bold mt-2">{article.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TopArticles;
