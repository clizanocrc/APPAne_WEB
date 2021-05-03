export const conyugesData = (matrimonios, genero = "F") => {
  const conyuges = [];
  if (genero === "F") {
    matrimonios.map((matrimonio) => conyuges.push(matrimonio.esposo));
  } else {
    matrimonios.map((matrimonio) => conyuges.push(matrimonio.esposa));
  }
  return conyuges;
};
