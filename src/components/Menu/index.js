import React from 'react';
import Logo from '../../assets/img/logoGameflix.png';
import './Menu.css';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';
import Button from '../Button';

function Menu() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="GameFlix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
