import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Cuenta = () => {

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Informacion Personal"}
          breadCumb1={"inicio"}
          breadCumb2={"Cuenta"}
          ruta1={"/home"}
        />

        <div className="card-body box-profile">
          <div className="text-center">
            <img alt="User profile picture"
            />
          </div>
          <h3 className="profile-username text-center">Nombre del cliente</h3>
          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Correo</b> <Link className="float-right"></Link>
            </li>
            <li className="list-group-item">
              <b>Numero de telefono</b> <Link className="float-right"></Link>
            </li>
            <li className="list-group-item">
              <b>Numero de indentificacion</b> 
              <Link className="float-right"></Link>
            </li>
          </ul>
          <Link to={"/CuentaEdit"}   className="btn btn-primary btn-block">
            <b>Editar informacion</b>
          </Link>
        </div>

        <Link to={"#"} className="small-box-footer">
          Eliminar cuenta <i className="fas fa-trash" />
        </Link>
      </div>
      <footer></footer>
    </div>
  );
};

export default Cuenta;
