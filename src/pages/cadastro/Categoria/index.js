/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PagerDefaut from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias/'
      : 'https://gameflix-kevin.herokuapp.com/categorias';

    fetch(URL)
      .then(async (ServResponse) => {
        const response = await ServResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <PagerDefaut>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          id="descricaoCategoria"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PagerDefaut>
  );
}

export default CadastroCategoria;
