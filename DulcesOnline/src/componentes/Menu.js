import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
      
      >
        <li className="nav-item">
          <Link to={"/Cuenta"} className="nav-link">
            <i className="nav-icon fas fa-user" />
            <p>Cuenta </p>
          </Link>
        </li>


        <li class="nav-item">
            <Link to={"#"} class="nav-link">
              <i class="nav-icon fas fa-candy"></i>
              <p>
                Productos
                <i class="right fas fa-angle-left"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to={"#"} class="nav-link">
                 
                  <p>Dulces</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"#"} class="nav-link">
               
                  <p>Bombones</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"#"} class="nav-link">
             
                  <p>Bebidas</p>
                </Link>
              </li>

              <li class="nav-item">
                <Link to={"#"} class="nav-link">
                  
                  <p>Galletas</p>
                </Link>
              </li>

              <li class="nav-item">
                <Link to={"#"} class="nav-link">
                  
                  <p>Gomitas</p>
                </Link>
              </li>



            </ul>
          </li>

        <Link>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
            <i className=" nav-icon fas fa-list"></i>
              <p> Marcas</p>
            </Link>
          </li>
        </Link>

        <Link>
          <li className="nav-item">
            <Link to={"/Contacto"} className="nav-link">
              <i className="nav-icon fas fa-phone" />
              <p> Contacto</p>
            </Link>
          </li>
        </Link>


        <Link>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="nav-icon fas fa-door-open" />
              <p> Salir</p>
            </Link>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
