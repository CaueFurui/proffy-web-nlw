import React from 'react'
import PageHeader from '../../components/PageHeader'
import * as DATA from './TeacherForm.json'

function TeacherForm() {
  return(
    <div id="page-teacher-form" className="container">
      <PageHeader title={DATA.title}/>
    </div>
  )
}

export default TeacherForm
