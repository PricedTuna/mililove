import '../styles/CardImage.css'

interface PolaroidImageProps {
  imageUrl: string;
  width: number;
}

function CardImageComponent({imageUrl, width}: PolaroidImageProps) {
  return (
    <div className="polaroid">
      <img src={imageUrl} alt="Polaroid" className="polaroid-image" style={{ width }} />
      <div className="polaroid-footer"></div>
    </div>
  );
}

export default CardImageComponent
