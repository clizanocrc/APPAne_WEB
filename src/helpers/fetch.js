const baseUrl = process.env.REACT_APP_API_URL;
const timeTimeOut = 10000; //Timeout para el fetch

export const fetchSinToken = async (endpoint, data, method = "GET") => {
  //Controler del TimeOut a 10 segundos
  // console.log("Peticion, fetchSinToken, con timeout a", timeTimeOut);
  const controller = new AbortController();
  //Función que controla el tiempo transcurrido
  const killerTime = setTimeout(() => {
    controller.abort();
    return {
      ok: false,
      msg: "Se agotó el tiempo, servidor no me resoponde, reintente más tarde",
    };
  }, timeTimeOut);

  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    const resp = await fetch(url, {
      //Controler TimeOut
      signal: controller.signal,
    });
    clearTimeout(killerTime);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    clearTimeout(killerTime);
    return await resp.json();
  }
};

export const fetchConToken = async (endpoint, data, method = "GET") => {
  //Controler del TimeOut a 10 segundos
  // console.log("Peticion, fetchConToken, con timeout a", timeTimeOut);
  const controller = new AbortController();
  //Función que controla el tiempo transcurrido
  const killerTime = setTimeout(() => {
    controller.abort();
    return {
      ok: false,
      msg: "Se agotó el tiempo, servidor no me resoponde, reintente más tarde",
    };
  }, timeTimeOut);

  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || undefined;
  if (method === "GET") {
    const resp = await fetch(url, {
      headers: {
        "x-token": token,
      },
      //Controler TimeOut
      signal: controller.signal,
    });
    //Limpiar el TimeOut
    clearTimeout(killerTime);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
      //Controler TimeOut
      signal: controller.signal,
    });
    //Limpiar el TimeOut
    clearTimeout(killerTime);
    return await resp.json();
  }
};

export const fetchImgConToken = async (endpoint, data, method = "GET") => {
  //Controler del TimeOut a 10 segundos
  // console.log("Peticion, fetchImgConToken, con timeout a", timeTimeOut);
  const controller = new AbortController();
  //Función que controla el tiempo transcurrido
  const killerTime = setTimeout(() => {
    controller.abort();
    return {
      ok: false,
      msg: "Se agotó el tiempo, servidor no me resoponde, reintente más tarde",
    };
  }, timeTimeOut);

  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || undefined;

  if (method === "GET") {
    const resp = await fetch(url, {
      headers: {
        "x-token": token,
      },
      signal: controller.signal,
    });
    clearTimeout(killerTime);
    return await resp.json();
  } else {
    var formData = new FormData();
    formData.append("archivo", data[0]);
    const resp = await fetch(url, {
      method,
      body: formData,
      headers: {
        // "Content-type": "application/json",
        "x-token": token,
      },
      signal: controller.signal,
    });
    clearTimeout(killerTime);
    return await resp.json();
  }
};
