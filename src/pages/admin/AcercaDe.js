import { Link } from "@material-ui/core";
import React from "react";
import { ImgBlog } from "../../components/blog/AutorPubli";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const AcercaDe = () => {
  const imgPortada =
    "https://res.cloudinary.com/dyor179ps/image/upload/v1620661874/APPAne/params/sacip_transp_yg9wdj.png";

  // const imgPortada =
  //   "https://res.cloudinary.com/dyor179ps/image/upload/v1620661931/APPAne/params/PNG_dimension_mediana_qlif8d.png";

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-7">
        <h3 className="mt-2">Sobre el Desarrollador</h3>
        <hr />
        <h6>Desarrollo a la medida para EMM Costa Rica</h6>
        <p>
          * Su información no será compartida con nadie para ningún fin, es de
          uso exclusivo del servicio ANE Costa Rica
        </p>
        <p>* Es de uso exclusivo del servicio ANE</p>
        <Link target="_blank" href="http://www.sacipcr.com">
          <ImgBlog
            image={imgPortada}
            alt={"portadablog"}
            styles={"imagenBlog"}
          />
        </Link>
        <hr />

        <h6>© Todos los derechos reservados 2021</h6>
        <h6>
          Contacto:{"  "}
          <a style={{ fontSize: 20 }} href="mailto: aneappcr@sacipcr.com">
            APPAnecr
          </a>{" "}
          |{"  "}
          <a style={{ fontSize: 20 }} href="mailto: carlos.lizano@sacipcr.com">
            Desarrollador
          </a>{" "}
          |{"  "}
          <Link
            style={{ fontSize: 20 }}
            target="_blank"
            href="http://www.sacipcr.com"
          >
            www.sacipcr.com
          </Link>
        </h6>
      </div>
    </div>
  );
};
