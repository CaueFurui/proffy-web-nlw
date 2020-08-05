import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import * as DATA from './TeacherList.json'
import Input from '../../components/Input'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={DATA.title}>
        <form id="search-teachers">
          <Input name='subject' label='Matéria' />
          <Input name='week-day' label='Dia da Semana' />
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
