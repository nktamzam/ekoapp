import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

import reducer from "./src/store/reducer";

const client = axios.create({
  baseURL: "http://ekoapp.online",
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default store;
