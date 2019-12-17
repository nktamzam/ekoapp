import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Picker
} from "react-native";
import { connect } from "react-redux";
import Cabecera from "./src/components/cabecera";
import { Formik } from "formik";
import * as yup from "yup";
import { postAccion } from "./src/store/actions";

class NuevaAccion extends Component {
  render() {
    return (
      <View style={style.container}>
        <Cabecera
          volver
          nivel={this.props.nivel}
          navigation={this.props.navigation}
          completadas={this.props.completadas}
          total={this.props.navigation.getParam("total")}
          puntosTotal={this.props.navigation.getParam("puntosTotal")}
        />

        <Formik
          initialValues={{
            titulo: "",
            texto: "",
            dificultad: "",
            energia: "",
            residuos: ""
          }}
          onSubmit={values => {
            this.props.postAccion(values);
            this.props.navigation.navigate("Home");
          }}
          validationSchema={yup.object().shape({
            titulo: yup.string().required(),
            texto: yup.string().required(),
            dificultad: yup.string().required(),
            energia: yup.string().required(),
            residuos: yup.string().required()
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            setFieldValue,
            touched,
            isValid,
            handleSubmit,
            isSubmitting
          }) => (
            <Fragment>
              <TextInput
                style={style.textinput}
                value={values.titulo}
                onChangeText={handleChange("titulo")}
                onBlur={() => setFieldTouched("titulo")}
                placeholder="Título"
              />
              {touched.titulo && errors.titulo && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.titulo}
                </Text>
              )}
              <TextInput
                style={style.textinput}
                value={values.texto}
                onChangeText={handleChange("texto")}
                placeholder="Texto descriptivo"
                multiline={true}
                onBlur={() => setFieldTouched("texto")}
              />
              {touched.texto && errors.texto && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.texto}
                </Text>
              )}

              <Picker
                style={style.textinput}
                selectedValue={values.dificultad}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue("dificultad", itemValue);
                }}
              >
                <Picker.Item label="Elegir dificultad" value="" />
                <Picker.Item label="facil" value="1" />
                <Picker.Item label="Dificil" value="2" />
                <Picker.Item label="Muy Dificil" value="3" />
              </Picker>

              <Picker
                style={style.textinput}
                selectedValue={values.energia}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue("energia", itemValue);
                }}
              >
                <Picker.Item
                  label="Elegir nivel de reducción de co2"
                  value=""
                />
                <Picker.Item label="Bajo" value="1" />
                <Picker.Item label="Medio" value="2" />
                <Picker.Item label="Alto" value="3" />
              </Picker>

              <Picker
                style={style.textinput}
                selectedValue={values.residuos}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue("residuos", itemValue);
                }}
              >
                <Picker.Item
                  label="Elegir nivel de reducción de residuos"
                  value=""
                />
                <Picker.Item label="Bajo" value="1" />
                <Picker.Item label="Medio" value="2" />
                <Picker.Item label="Alto" value="3" />
              </Picker>
              <Button
                style={style.textinput}
                title="Nueva acción"
                disabled={!isValid}
                disabled={isSubmitting}
                onPress={handleSubmit}
              />
            </Fragment>
          )}
        </Formik>
      </View>
    );
  }
}

// convertimos los state (accion, loading, nivel, completadas) en props
const mapStateToProps = state => ({
  nivel: state.localReducer.nivel,
  completadas: state.localReducer.completadas
});

// convertimos las acciones getAccion, mePaso, meVuelvo en props
const mapDispatchToProps = {
  postAccion
};

// exportamos con el state y las actions cómo props
export default connect(mapStateToProps, mapDispatchToProps)(NuevaAccion);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#333"
  },
  textinput: {
    fontSize: 15,
    margin: 15,
    padding: 10,
    backgroundColor: "white",
    color: "black"
  },
  icono: { width: 50, height: 50, margin: 10 }
});
