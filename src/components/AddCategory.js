import React, { useState } from "react";
import PropTypes from "prop-types";

//Este es el componente del input que busca las categorias.

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); //Colocamos lo que escribio el usuario en el input al estado del value
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((catego) => [inputValue, ...catego]); //catego es el antiguo estado - inputValue es lo que esta en el input
      //Las funciones de estado pueden recibir un callback el cual el primer argumento que contiene el estado anterior.
      setInputValue("");
      //Despues de agregar un elemento a la lista borramos el contenido del input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
