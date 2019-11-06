export const listarAcciones = () => {
  return {
    type: "ekoapp/acciones/LOAD",
    payload: {
      request: {
        url: `/acciones/lista`
      }
    }
  };
};

export const getAccion = id => {
  return {
    type: "ekoapp/accion/INFO",
    payload: {
      request: {
        url: `/acciones/detalle?id=${id}`
      }
    }
  };
};

export function calcNivel() {
  return {
    type: "prueba"
  };
}

export function sumaNivel() {
  return {
    type: "suma"
  };
}

export function addAccion(id) {
  return {
    type: "add",
    id: id
  };
}
