import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App(){
    return(
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={"Bienvenidos"}/>
        </div>
    )
}

export default App;