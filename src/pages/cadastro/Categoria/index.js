import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import './index.css'
import Button from '../../../components/Button';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#db0000',
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor //atribuido dinamicamente por causa das chaves exemplo nome: 'valor'
    })
  }

  function handlerChange(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value)
  }

  return (
    <PageDefault>
      <h1 >Cadastro de Categoria: {values.nome}</h1>

      <div className="formCategoria">
        <form onSubmit={function handlerSubmit(infoEvento) {
          infoEvento.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])
          setValues(valoresIniciais)
        }}>

          <FormField
            label="Nome da categoria:"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handlerChange}
          />

          <FormField
            label="Descrição:"
            type="textArea"
            name="descricao"
            value={values.descricao}
            onChange={handlerChange}
          />

          <FormField
            label="Cor:"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handlerChange}
          />

          <button className="Button">Cadastrar</button>

        </form>
      </div>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`} >
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Button as={Link} className="Button" to="/">
        Ir para home
      </Button>
    </PageDefault>)
}

export default CadastroCategoria