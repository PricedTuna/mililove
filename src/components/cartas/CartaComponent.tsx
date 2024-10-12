
interface Props {
  width?: number
  text: string
}

function CartaComponent({text, width = 90}: Props) {
  return (
    <img src="src/assets/img/carta/carta.png" className="img-fluid" onClick={() => {console.log(text)}} width={width} />
  )
}

export default CartaComponent
