export function listarAcciones() {
  return {
    type: "ekoapp/acciones/LOAD",
    payload: {
      request: {
        url: `/acciones/lista`
      }
    }
  };
}

export function getAccion(id) {
  return {
    type: "ekoapp/accion/INFO",
    payload: {
      request: {
        url: `/acciones/detalle?id=${id}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/acciones/nueva`
      }
    }
  };
}

export function calcNivel() {
  return {
    type: "prueba"
  };
}

export function sumaNivel() {
  return dispatch => {
    return {
      type: "suma"
    };
  };
}

export function addAccion(id) {
  return {
    type: "add",
    id: id
  };
}
