/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PagerDefaut from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <PagerDefaut>
      <h1>Cadastro de vídeos</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        // alert('Vídeo cadastrado com sucesso!!');

        // eslint-disable-next-line arrow-body-style
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PagerDefaut>
  );
}

export default CadastroVideo;
