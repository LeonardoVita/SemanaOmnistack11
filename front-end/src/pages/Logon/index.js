import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './style.css'

import heroesImg from '../../assests/heroes.png'
import logoImg from '../../assests/logo.svg'

export default function Logon() {

  const [id, setId] = useState()
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      history.push('/profile')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>faça seu logon</h1>
          <input type="text"
            placeholder="sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="Back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}