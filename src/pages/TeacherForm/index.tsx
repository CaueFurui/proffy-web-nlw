import React from 'react'
import PageHeader from '../../components/PageHeader'
import * as DATA from './TeacherForm.json'
import './styles.css'
import Input from '../../components/Input'

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
          <Input name='subject' label='Matéria' />
          <Input name='avatar' label='Avatar' />
          <Input name='whatsapp' label='WhatsApp' />
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm
