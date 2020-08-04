import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48840933?s=460&u=398aa25c197720153fd9bc152fa16f3f416cb853&v=4" alt="Avatar"/>
        <div>   
          <strong>Caue Furui Martins</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através 
      de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>

    </article>
  )
}

export default TeacherItem
