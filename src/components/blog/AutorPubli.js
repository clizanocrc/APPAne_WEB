import moment from "moment";
import React from "react";

const defaultImg =
  "https://res.cloudinary.com/dyor179ps/image/upload/v1619550708/APPAne/blog/emm4_ab3yha.png";

export const AutorPubli = ({ fechaPubli, autor, aling }) => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      className="mb-1 my-1"
    >
      {/* <hr /> */}
      <small>Autor: {autor}</small>
      {moment().diff(fechaPubli, "days") === 0 ? (
        <small>Publicado hace poco</small>
      ) : (
        <small> Publicado hace {moment().diff(fechaPubli, "days")} días</small>
      )}
      <hr />
    </div>
  );
};

export const ImgBlogAjus = ({ image, alt }) => {
  return (
    <div className="doc">
      <div className="box">
        <img
          alt={alt}
          src={image ? image : defaultImg}
          className="imagenBlogajustada"
          style={{
            // objectFit: "contain",
            borderRadius: 30,
          }}
        />
      </div>
    </div>
  );
};

export const ImgBlog = ({ image, alt }) => {
  return (
    <div className="doc">
      <div className="box">
        <img
          alt={alt}
          src={image ? image : defaultImg}
          className="imagenBlog"
        />
      </div>
    </div>
  );
};
