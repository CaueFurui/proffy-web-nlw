import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import * as DATA from './TeacherForm.json'
import './styles.css'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherForm() {

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const history = useHistory()

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '0', from: '', to: '' }
  ])

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: '0', from: '', to: '' }
    ])

    scheduleItems.push({
      week_day: '',
      from: '',
      to: ''
    })
  }

  function handleCreateClass(e: FormEvent) {

    e.preventDefault()

    api.post('classes', {
      subject,
      cost: Number(cost),
      name,
      avatar,
      whatsapp,
      bio,
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(() => {
      alert('Erro no cadastro!')
    })

  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setScheduleItems(updateScheduleItems)
  }

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title={DATA.title}
        description={DATA.desc}  
      />
      <form onSubmit={handleCreateClass}>
        <main>
          <fieldset>
            <legend>Seus dados</legend>
            <Input 
              name='name' 
              label='Nome 
              Completo' 
              value={name} 
              onChange={(e) => { setName(e.target.value) }} 
            />
            <Input 
              name='avatar' 
              label='Avatar'
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }} 
            />
            <Input
              name='whatsapp'
              label='WhatsApp'
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Textarea
              name='bio'
              label='Biografia'
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select 
              name='subject' 
              label='Matéria'
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={DATA.subjectData}
            />
            <Input 
              name='cost' 
              label='Custo da sua aula por hora' 
              value={cost}
              onChange={(e) => { setCost(e.target.value) }}  
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
                <button type='button' onClick={addNewScheduleItem}>
                  + Novo Horário
                </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name='week_day' 
                    label='Dia da semana'
                    value={scheduleItem.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={DATA.weekDays}
                  />
                  <Input 
                    type="time" 
                    name='from' 
                    label='Das'
                    value={scheduleItem.from}

                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    type="time" 
                    name='to' 
                    value={scheduleItem.to}
                    label='Até'
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type='submit'>
              Salvar cadastro
            </button>
          </footer>
        </main>
      </form>
    </div>
  )
}

export default TeacherForm
