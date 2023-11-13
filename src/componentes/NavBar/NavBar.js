import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";


function NavBar(){
    return(
        <section className="hero is-primary">
            <nav className="hero body">
                <h3 className="title">E-commerce</h3>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                        <div className="navbar-end">
                            <button className="navbar-item is-active">Productos</button>
                            <button className="navbar-item">Imagenes</button>
                            <button className="navbar-item">Contacto</button>
                        </div>
                        <CartWidget />
                    </div>
            </nav>
        </section>
    )
}

export default NavBar;