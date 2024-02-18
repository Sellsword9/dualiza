const Resultado = (img) => {
  let x = img.img;
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={x} alt="Resultado" />
    </div>
  )
}

export default Resultado