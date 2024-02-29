const Spinner = ({mensaje}) => {
  const mensajeSpinner = mensaje;
  return (
    <div aria-label="Loading..." role="status" className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-2 p-4 bg-white ">
    <span className="text-4xl font-medium text-gray-500">{mensajeSpinner}</span>
      </div>
    </div>
  );
};

export default Spinner;
