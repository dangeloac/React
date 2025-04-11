function Titulo() {
  const nombre = "Chanchito Feliz";
  //jsx
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Inmundo</h1>;
}
export default Titulo;
