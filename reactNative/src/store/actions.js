import axios from "axios";

export const consulta = (bool, type) => {
  return {
    type: type,
    payload: bool
  };
};

export const completada = (data, type) => {
  return {
    type: type,
    payload: data,
    loading: false
  };
};

export const error = (error, type) => {
  return {
    type: type,
    payload: error,
    loading: false
  };
};

export const getAcciones = () => {
  return dispatch => {
    //Dispatch the fetchData action creator before retrieving to set our loading state to true.
    dispatch(consulta(true, "GET_ACCIONES"));
    //Then get the data.
    axios
      .get("http://ekoapp.online/acciones/lista")
      .then(res => {
        dispatch(completada(res.data, "GET_ACCIONES_COMPLETADO"));
      })
      .catch(err => dispatch(error(err, "GET_ACCIONES_ERROR")));
  };
};

export const getAccion = id => {
  return dispatch => {
    //Dispatch the fetchData action creator before retrieving to set our loading state to true.
    dispatch(consulta(true, "GET_ACCION"));
    //Then get the data.
    axios
      .get("http://ekoapp.online/acciones/detalle", { params: { id: id } })
      .then(res => {
        dispatch(completada(res.data, "GET_ACCION_COMPLETADO"));
      })
      .catch(err => dispatch(error(err, "GET_ACCIONES_ERROR")));
  };
};

export const calcNivel = () => {
  return {
    type: "prueba"
  };
};

export const sumaNivel = () => {
  return {
    type: "suma"
  };
};

export const addAccion = id => {
  return {
    type: "add",
    id: id
  };
};
