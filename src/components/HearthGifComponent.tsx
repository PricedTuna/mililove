interface Props {
  heigth?: number
  className: string
}

function HearthGifComponent({heigth = 120, className}: Props) {
  return (
    <img src="https://i.pinimg.com/originals/e0/f4/44/e0f44460bdb364dd215d8c4a8cafada0.gif" height={heigth} className={className} />
  )
}

export default HearthGifComponent
