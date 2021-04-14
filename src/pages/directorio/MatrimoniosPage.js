import React, { useContext } from "react";
import { MatrimonioCard } from "../../components/MatrimonioCard";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";

export const MatrimoniosPage = () => {
  const { matrimonios } = useContext(MatrimoniosContext);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-10" style={{ overflowY: "scroll" }}>
        <div className="card-columns animate__animated animate__fadeIn mt-2">
          {matrimonios.matrimonios.map((matrimonio) => (
            <MatrimonioCard key={matrimonio.id} {...matrimonio} />
          ))}
        </div>
      </div>
    </div>
  );
};
