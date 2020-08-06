import React, { useState, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import * as DATA from './TeacherList.json'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherList() {

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault()

    const res = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(res.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={DATA.title}>
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select 
            name='subject' 
            label='Matéria' 
            options={DATA.subjectData}
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
          />
          <Select 
            name='week_day' 
            label='Dia da semana' 
            options={DATA.weekDays}
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
          />
          <Input
            name='time'
            type='time'
            label='Hora'
            value={time}
            onChange={
              (e) => { setTime(e.target.value) 
            }}
          />

          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        { teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        }) }
      </main>
    </div>
  )
}

export default TeacherList
