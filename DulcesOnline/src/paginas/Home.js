import React from "react";
import ContentHeader from "../componentes/ContentHeader";
import Navbar from "../componentes/Navbar";
import SidebarContainer from "../componentes/SidebarContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Inicio"}
          breadCumb1={"Inicio"}
          breadCumb2={"Inicio"}
          ruta1={"/home"}
        />

        <ul
          className="products products-container grid pcols-lg-4 pcols-md-3 pcols-xs-3 pcols-ls-2 pwidth-lg-4 pwidth-md-3 pwidth-xs-2 pwidth-ls-1 is-shortcode"
          data-product_layout="product-wq_onimage"
        >
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="position-">
                    <img
                      src="https://th.bing.com/th/id/OIP.J4Uzm4h2KP_fseXDBZ0ZAgAAAA?pid=ImgDet&rs=1"
                      alt="Dulces"
                      width={250}
                      height={200}
                    />
                    <div className="inner"></div>

                    <Link to={"#"} className="small-box-footer">
                      <p>Dulces</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div class="position-relative">
                    <img
                      src="https://3.bp.blogspot.com/-fxPkhqdrV2s/TwjOgbKaJGI/AAAAAAAAAIs/ypr3ZTHsi9I/s1600/Bebidas-diversas.jpg"
                      alt="Bebidas"
                      width={250}
                      height={200}
                    />
                    <div className="inner"></div>
                    <Link to={"#"} className="small-box-footer">
                      <p>Bebidas</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="position-relative" style={{position: 'absolute', top: -500, left: 290}}
                 >
                    <img
                    
                      src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
                      alt="chocolates"
                      width={600}
                      height={500}
                    
                      
                     
                    />
                    <div className="inner"></div>

                    <Link to={"#"} className="small-box-footer">
                      <p>Chocolates</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

           
          </section>
        </ul>
      </div>
      <footer></footer>
    </div>
  );
};
export default Home;
