import HearthGifComponent from "../components/HearthGifComponent";
import useWindowSize from "../hooks/useWindowSize";
import InfiniteCarousel from "./carousel/InfiniteCarousel";

export interface CardImage {
  imageUrl: string;
  width: number;
}


function HeroComponent() {
  const { width } = useWindowSize();
  const imageWidth: number = width <= 480 ? 70 : width <= 600 ? 120 : width >= 1024 ? 120 : 120
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

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center h-100 min-vh-100"
      style={{
        background: "linear-gradient(180deg, #dfaebe 80%, #ffbaa2 100%)",
      }}
    >
      <img
        src="img/draws/lianas_flores_2.png"
        alt="liana y flores dibujadas a mano"
        width="100%"
        className="img-fluid"
      />
      <InfiniteCarousel
        images={images}
        settings={{
          dots: false,
          infinite: true,
          arrows: false,
          speed: 4000,
          cssEase: "linear",
          centerMode: false,
          slidesToScroll: 1,
          slidesToShow: 5,
          autoplay: true,
          autoplaySpeed: 0,
          rtl: false, // Auto-scroll hacia la izquierda
          responsive: [
            {
              breakpoint: 1024, // En pantallas más grandes de 1024px
              settings: {
                slidesToShow: 3, // Mostrar 3 slides
              },
            },
            {
              breakpoint: 600, // En pantallas más grandes de 600px y menores a 1024px
              settings: {
                slidesToShow: 1, // Mostrar 2 slides
              },
            },
            {
              breakpoint: 480, // En pantallas menores a 600px
              settings: {
                slidesToShow: 1, // Mostrar 1 slide
              },
            },
          ],
        }}
      />
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <HearthGifComponent className="" heigth={width <= 480 ? 35 : 55} />
        <h1
          className="protest-strike-regular"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
            fontSize: width <= 480 ? "2.5rem" : width <= 600 ? "3.5rem" : width >= 1024 ? "4rem" : "4rem"
            // fontSize: width <= 480 ? "2.5rem" : "3.5rem",
          }}
        >
          Edgar para Mili
        </h1>
        <HearthGifComponent className="" heigth={width <= 480 ? 35 : 55} />
      </div>
      <InfiniteCarousel
        images={images}
        settings={{
          dots: false,
          infinite: true,
          speed: 4000,
          cssEase: "linear",
          arrows: false,
          centerMode: false,
          slidesToScroll: 1,
          slidesToShow: 5,
          autoplay: true,
          autoplaySpeed: 0,
          rtl: true, // Auto-scroll hacia la izquierda
          responsive: [
            {
              breakpoint: 1024, // En pantallas más grandes de 1024px
              settings: {
                slidesToShow: 3, // Mostrar 3 slides
              },
            },
            {
              breakpoint: 600, // En pantallas más grandes de 600px y menores a 1024px
              settings: {
                slidesToShow: 2, // Mostrar 2 slides
              },
            },
            {
              breakpoint: 480, // En pantallas menores a 600px
              settings: {
                slidesToShow: 1, // Mostrar 1 slide
              },
            },
          ],
        }}
      />
      <img
        src="img/draws/lianas_flores_2.png"
        alt="liana y flores dibujadas a mano"
        width="100%"
        className="img-fluid"
      />
    </div>
  );
}

export default HeroComponent;
