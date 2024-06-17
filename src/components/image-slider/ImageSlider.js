import { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://i.redd.it/ig6pr6sryt6d1.png",
    "https://i.redd.it/rfxe30tbf07d1.png",
    "https://i.redd.it/3bdledjckx6d1.png",
    "https://i.redd.it/a6nc49e7lt6d1.png",
    "https://i.redd.it/brdb14wcsv6d1.png",
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      loadNextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const loadPreviousImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };

  return (
    <div className="m-2 p-2 flex justify-center items-center">
      <img
        className="h-[100px] w-[75px] m-2 cursor-pointer"
        src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-gris.png"
        onClick={loadPreviousImage}
      />
      <img className="h-56 w-72" src={images[active]} alt="slider" />
      <img
        className="h-[100px] w-[75px] m-2 cursor-pointer"
        src="https://image.pngaaa.com/660/613660-middle.png"
        onClick={loadNextImage}
      />
    </div>
  );
};

export default ImageSlider;
