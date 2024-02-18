const Resultado = (img) => {
  let x = img.img;
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl m-8 p-8 bg-gradient-to-b mr-10 ml-10 from-azul-negro to-azul-semi-oscuro">
      <img src={x} alt="Resultado" />
    </div>
  )
}

export default Resultado