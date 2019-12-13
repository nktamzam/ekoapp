import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Picker
} from "react-native";
import { connect } from "react-redux";
import Cabecera from "./src/components/cabecera";
import { Formik } from "formik";
import * as yup from "yup";

class NuevaAccion extends Component {
  static navigationOptions = {};

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
            descripcion: "",
            dificultad: "",
            co2: "",
            residuos: ""
          }}
          onSubmit={values => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            titulo: yup.string().required(),
            descripcion: yup
              .string()
              .min(6)
              .required(),
            dificultad: yup.string().required(),
            co2: yup.string().required(),
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
            handleSubmit
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
                value={values.descripcion}
                onChangeText={handleChange("descripcion")}
                placeholder="Texto descriptivo"
                multiline={true}
                onBlur={() => setFieldTouched("descripcion")}
              />
              {touched.descripcion && errors.descripcion && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.descripcion}
                </Text>
              )}

              <Picker
                style={style.textinput}
                selectedValue={values.dificultad}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue("dificultad", itemValue);
                }}
              >
                <Picker.Item label="Eegir dificultad" value="" />
                <Picker.Item label="facil" value="1" />
                <Picker.Item label="Dificil" value="2" />
                <Picker.Item label="Muy Dificil" value="3" />
              </Picker>

              <Picker
                style={style.textinput}
                selectedValue={values.co2}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue("co2", itemValue);
                }}
              >
                <Picker.Item
                  label="Elegir nivel de reducción de co2"
                  value=""
                />
                <Picker.Item label="Nada" value="0" />
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
                <Picker.Item label="Nada" value="0" />
                <Picker.Item label="Bajo" value="1" />
                <Picker.Item label="Medio" value="2" />
                <Picker.Item label="Alto" value="3" />
              </Picker>
              <Button
                style={style.textinput}
                title="Nueva acción"
                disabled={!isValid}
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
const mapDispatchToProps = {};

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
