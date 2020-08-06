import React from 'react'
import PageHeader from '../../components/PageHeader'
import * as DATA from './TeacherForm.json'
import './styles.css'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

function TeacherForm() {
  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title={DATA.title}
        description={DATA.desc}  
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name='name' label='Nome Completo' />
          <Input name='avatar' label='Avatar' />
          <Input name='whatsapp' label='WhatsApp' />
          <Textarea name='bio' label='Biografia'/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select 
            name='subject' 
            label='Matéria' 
            options={DATA.subjectData}
            />
          <Input name='cost' label='Custo da sua aula por hora' />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type='button'>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm
