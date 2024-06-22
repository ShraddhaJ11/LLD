import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,thumbnail,description,discountPercentage,id`
    );
    const json = await data.json();
    setProducts(json.products);
    if (json.total % LIMIT) setNoOfPages(parseInt(json.total / LIMIT) + 1);
    else setNoOfPages(parseInt(json.total / LIMIT));
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product, i) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
      <div className="p-10 cursor-pointer">
        {currentPage !== 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={
              "text-xl p-4 " + (pN === currentPage && "text-bold underline")
            }
            key={pN}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
