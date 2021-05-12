// import React from "react";
import React, { useContext } from "react";
import imgFB from "../assets/FB.png";
import imgInst from "../assets/instagram.png";
import imgEMM from "../assets/emm.png";
import { BlogPageList, EventsPage, UsuariosOnline } from ".";
import { ExternalLink } from "../components/ui/atom/FormControls";
import { AppContext } from "../context/AppContext";
import { NuevosMensajesFab } from "../components/ui/NuevosMensajesFab";

export const PrincipalPage = () => {
  const { state } = useContext(AppContext);
  const { params } = state;
  let sinpemovil = "";
  if (params[0]) {
    sinpemovil = params[0].sinpemovil;
  } else {
    sinpemovil = "";
  }

  return (
    <div className="flexbox-container">
      <div
        // className="col-md-2 mt-2 animate__animated animate__pulse"
        className="col-md-2 mt-2"
        style={{ height: "87vh", overflowY: "scroll" }}
      >
        <ExternalLink
          url="https://www.instagram.com/encuentromatrimonialcr"
          img={imgInst}
          label="Instagram"
        />
        <ExternalLink
          url="https://www.facebook.com/ENCUENTRO-MATRIMONIAL-MUNDIAL-Costa-Rica-244789188882278"
          img={imgFB}
          label="Facebook"
        />
        <ExternalLink
          url="https://encuentromatrimonialcr.org"
          img={imgEMM}
          label="Sitio WEB"
        />
        <div className="mt-4 mb-4">
          <h6>Sinpe Movil</h6>
          <h3>{sinpemovil}</h3>
        </div>
        <hr />
        <UsuariosOnline />
      </div>
      <div className="col-md-7 mt-4">
        <p>Últimas 2 publicaciones en el Blog</p>
        <BlogPageList />
      </div>
      <div
        className="col-md-3"
        style={{ height: "87vh", overflowY: "scroll", overflowX: "hidden" }}
      >
        <h6 className="ml-2">Próximos Eventos</h6>
        <EventsPage />
      </div>
      <NuevosMensajesFab />
    </div>
  );
};
