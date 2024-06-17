import { useEffect, useState } from "react";
import MemeCard from "./shimmer/MemeCard";
import Shimmer from "./shimmer/Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight)
      fetchMemes();
  };

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
