export let Login = () => {
    let nombre = "pepito";
    let saludar = () => {
    console.log("Saludar");
  };
  
  return (
    <div>
      <h1>Hola mi nombre es {nombre}</h1>

        <button on onClick={saludar}>
        Click para saludar
      </button>

    </div>
  );
};
