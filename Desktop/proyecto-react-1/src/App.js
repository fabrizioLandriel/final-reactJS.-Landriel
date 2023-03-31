import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  
  let greeting = "Hola, usuario :D"

  return (
    <div className="App">
      <Navbar />
      <CartWidget/>
      <ItemListContainer greeting = {greeting} color = "red"/>
    </div>

  );
}

export default App;
