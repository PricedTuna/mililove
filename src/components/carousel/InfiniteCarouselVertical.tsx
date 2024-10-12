import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import useWindowSize from '../../hooks/useWindowSize';

interface InfiniteCarouselProps {
  settings: Settings;
  items: string[];
  className?: string;
}

const InfiniteCarouselVertical = ({ settings, items, className = "" }: InfiniteCarouselProps) => {
  const { width } = useWindowSize();
  return (
    <div style={{ width: '80%',  margin: 'auto' }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <p className={`text-center ${className} fw-semi-bold`} style={{textShadow: '1px 1px 1px rgba(0, 0, 0, 0.6)', fontSize: width <= 600 ? "3rem" : width >= 1024 ? "4rem" : "4rem"}}>{item}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteCarouselVertical;
