import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImageComponent from "../CardImageComponent";
import { CardImage } from "../HeroComponent";

interface Props {
  images: CardImage[];
  settings: Settings;
}

const InfiniteCarousel = ({ images, settings }: Props) => {
  return (
    <div style={{ width: "80%" }}>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index} className="d-flex justify-content-center">
              <CardImageComponent
                imageUrl={image.imageUrl}
                width={image.width}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
