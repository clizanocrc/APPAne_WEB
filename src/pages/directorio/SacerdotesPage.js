import React, { useContext } from "react";
import { SacerdoteCard } from "../../components/SacerdoteCard";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";

export const SacerdotesPage = () => {
  const { matrimonios } = useContext(MatrimoniosContext);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div
        className="col-md-10"
        style={{ height: "87vh", overflowY: "scroll" }}
      >
        <div className="card-columns animate__animated animate__fadeIn mt-2">
          {matrimonios.sacerdotes.map((sacerdote) => (
            <SacerdoteCard key={sacerdote.id} {...sacerdote} />
          ))}
        </div>
      </div>
    </div>
  );
};
