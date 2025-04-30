import posts from "../posts.json";
import Toogle from "../components/Toogle";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const onSearchChange = (value) => {
    console.log(value);
  };

  return (
    <div className="min-h-screen items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Toogle />
      <div className="p-8 ">
        <h1 className="font-bold text-5xl mb-8">Simple Blog</h1>
        <Search onSearchChange={onSearchChange} />
        {posts.map(({ title, date, tags }, Index) => (
          <Article {...{ title, date, tags }} key={Index} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
