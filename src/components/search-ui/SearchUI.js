import { useEffect, useState } from "react";

const SearchUI = () => {
  const [searchRes, setSearchRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      fetchData();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  const fetchData = async () => {
    // if cache has data , send data from here
    if (cache[searchText]) {
      setSearchRes(cache[searchText]);
    } else {
      // if cache does not have data, make the api call and update the cache
      const data = await fetch(
        `https://www.google.com/complete/search?q=${searchText}&client=firefox`
      );
      const json = await data.json();
      cache[searchText] = json[1];
      setSearchRes(json[1]);
    }
  };

  return (
    <div className="m-10">
      <input
        type="text"
        value={searchText}
        className="p-2 w-96 border border-black shadow-lg"
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {searchRes.length > 1 && showResults && (
        <ul className="w-96 border border-black shadow-lg">
          {searchRes.map((res, i) => (
            <li className="p-2 hover:bg-gray-200 cursor-pointer" key={i}>
              {res}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
