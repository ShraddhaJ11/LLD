import "./App.css";
import Body from "./components/Body";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import NestedComments from "./components/nested-comments/NestedComments";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Accordion /> */}
      <ImageSlider/>
      <NestedComments/>
      <Body />
    </div>
  );
}
