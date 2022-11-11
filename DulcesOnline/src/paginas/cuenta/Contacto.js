import React from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";

const Contacto = () => {
  return (

    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>
    <div className="content-wrapper">
      <ContentHeader
        titulo={"Contactos"}
        breadCumb1={"inicio"}
        breadCumb2={"Contacto"}
        ruta1={"/home"}
      />


    <div className="card"
     style={{position: 'absolute', top:100, left: 500}}>
      
        
      
      <div className="card-body">
        <table className="table table-">
          <thead   >
            <tr>
              <th style={{ width:150  }}>#</th>
              <th >Info</th>
              
          
            </tr>
          </thead>
          <tbody>


            <tr>
              <td>Correo </td>
              <td>DulceriaOnline@gmail.com</td>
            </tr>


            <tr>
              <td>Telefono </td>
              
              <td>312 249 25 19</td>
            </tr>

            <tr>
              <td>WhatsApp</td>
              <td>+57 320 156 21 39</td>
            </tr>

            <tr>
              <td>Instagram </td>
              <td>@DulceriaOnline_01</td>
            </tr>

            <tr>
              <td>Twitter </td>
              <td>@DulceriaOnline</td>
            </tr>

            <tr>
              <td>Facebook </td>
              <td>Dulceria Online</td>
            </tr>


          </tbody>
        </table>
      </div>
      
    </div>
    </div>
    <footer></footer>
    </div>
  );
};

export default Contacto;
