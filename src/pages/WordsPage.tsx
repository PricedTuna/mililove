import { Settings } from "react-slick";
import InfiniteCarouselVertical from "../components/carousel/InfiniteCarouselVertical"
import InfiniteCarousel from "../components/carousel/InfiniteCarousel";
import { CardImage } from "../components/HeroComponent";
import useWindowSize from "../hooks/useWindowSize";


function WordsPage() {
  
  const { width } = useWindowSize();
  const imageWidth: number = width <= 480 ? 70 : width <= 600 ? 120 : width >= 1024 ? 180 : 180

  const images: CardImage[] = [
    {
      imageUrl: "img/edgarmili_past1.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_callejon2.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_malecon3.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_boda.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_past2.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_past3.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_callejon.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_malecon.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_parq_sinaloa.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_vestido.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_malecon2.jpeg",
      width: imageWidth,
    },
    {
      imageUrl: "img/edgarmili_malecon3.jpeg",
      width: imageWidth,
    },
  ];

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    vertical: true, // Scroll vertical
    verticalSwiping: true, // Permite hacer swipe verticalmente
    arrows: false,
  };

  const admiro = ['Tu tolerancia', 'Tu fuerza', 'Tu impetu', 'Tus ganas', 'Tu pasión', 'Tu tranquilidad'];
  const momento = ['Maravilloso', 'Increible', 'Gracioso', 'Tranquilizador', 'Curativo', 'Iluminador', 'Motivante'];
  const amor = ['Te amo', 'Te quiero', 'Te adoro', 'Te admiro', 'Te necesito', 'Te aprecio', 'Lo eres todo para mi'];
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2">
      <div className="px-1 py-2 my-5 d-flex align-items-center justify-content-center flex-column">
        <p className="p-0 m-0 playfair-display-regular text-center" style={{fontSize: width <= 480 ? "1.8rem" : width <= 600 ? "3rem" : width >= 1024 ? "4rem" : "4rem"}}>Hemos compartido experiencias tan hermosas</p>
        <InfiniteCarousel images={images} settings={{...settings, centerMode: true}} />
      </div>
      <div className="px-1 py-2 my-5">
        <p className="p-0 m-0 playfair-display-regular text-center" style={{fontSize: width <= 480 ? "1.8rem" : width <= 600 ? "3rem" : width >= 1024 ? "4rem" : "4rem"}}>Cada dia admiro mas de ti</p>
        <InfiniteCarouselVertical items={admiro} settings={settings} />
      </div>
      <div className="px-1 py-2 my-5">
        <p className="p-0 m-0 playfair-display-regular text-center" style={{fontSize: width <= 480 ? "1.8rem" : width <= 600 ? "3rem" : width >= 1024 ? "4rem" : "4rem"}}>Cada momento que comparto contigo es</p>
        <InfiniteCarouselVertical items={momento} settings={settings} />
      </div>
      <div className="px-1 py-2 my-5">
        <p className="p-0 m-0 playfair-display-regular text-center fw-bold" style={{fontSize: "4rem", textShadow: "2px 2px 1px rgba(0, 0, 0, 0.5)"}}>Y por eso...</p>
        <InfiniteCarouselVertical className="fw-bold textUltraLargeAndShadow" items={amor} settings={settings} />
      </div>
    </div>
  )
}

export default WordsPage
