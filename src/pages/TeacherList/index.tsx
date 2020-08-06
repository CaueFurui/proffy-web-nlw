import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import * as DATA from './TeacherList.json'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={DATA.title}>
        <form id="search-teachers">
        <Select 
            name='subject' 
            label='Matéria' 
            options={DATA.subjectData}
            />
          <Select 
            name='week_day' 
            label='Dia da semana' 
            options={DATA.weekDays}
            />
          <Input name='time' type='time' label='Hora' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList
