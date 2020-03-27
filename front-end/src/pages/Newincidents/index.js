import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './style.css'
import logoImg from '../../assests/logo.svg'

export default function Profile() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const ongId = localStorage.getItem('ongId')
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    // console.log(title, description, value)

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
    } catch (err) {
      console.logo(err.message)
    } finally {
      history.push('/profile')
    }


  }
  return (
    <div className="newincident-container">
      <div className="content">

        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="Back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit" >cadastrar</button>
        </form>
      </div>
    </div>
  );
}