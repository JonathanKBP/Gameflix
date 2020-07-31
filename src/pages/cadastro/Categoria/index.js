import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#212121',
  };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]); // Valores iniciais para teste

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(evento) {
    setValue(evento.target.getAttribute('name'), evento.target.value);
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(valoresIniciais);
  }

  useEffect(() => {
    const URL_DB = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gameflix-kevin.herokuapp.com/categorias';

    fetch(URL_DB)
      .then(async (serverDados) => {
        const dados = await serverDados.json();
        setCategorias([
          ...dados,
        ]);
      });
  }, []);

  return (
    <PageDefault>

      <h1>Cadastro de categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          as="textarea"
          label="Descrição"
          type="textarea"
          name="descricao"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.lenght === 0 && (
        <div>
          <p style={{ padding: '5px 0' }}>
            Carregando categorias...
          </p>
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`} style={{ color: categoria.cor }}>
            {categoria.nome}
            {' - '}
            {categoria.descricao}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>

    </PageDefault>
  );
}

export default CadastroCategoria;