const Shimmer = () => {
    return Array(20)
      .fill(0)
      .map((n, i) => (
        <div key={i} className="m-4 p-4 border border-black rounded">
          <div className="w-20 h-20 bg-gray-200"></div>
        </div>
      ));
  };
  
  export default Shimmer;
  