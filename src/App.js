import "./App.css";
import Body from "./components/Body";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import NestedComments from "./components/nested-comments/NestedComments";
import Pagination from "./components/pagination/Pagination";
import SearchUI from "./components/search-ui/SearchUI";

export default function App() {
  return (
    <div className="App">
      <SearchUI/>
      {/* <h1>Hello World</h1> */}
      {/* <Accordion /> */}
      <ImageSlider/>
      <NestedComments/>
      <Pagination/>
      <Body />
    </div>
  );
}
