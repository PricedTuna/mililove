import useWindowSize from "../../hooks/useWindowSize";

interface Props {
  text: string
}

function EscritoComponent({text: _text}: Props) {

  const { width } = useWindowSize();
  return (
    <img src="src/assets/img/carta/escribiendo.png" className="img-fluid" width={width <= 480 ? 90 : width <= 600 ? 150 : width >= 1024 ? 200 : 200} />
  )
}

export default EscritoComponent
