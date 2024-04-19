import React from 'react'
import "./admin.css"
import { useState } from "react";
import PageBody from "../../Components/macro-Components/PageBody";
import TeacherTable from '../../Components/macro-Components/TeacherTable';

const Faculty = () => {

  const [openModal, setOpenModel] = useState(false)

  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        
        <select class="form-select me-3" aria-label="Default select example">
        
          <option selected>SELECT CLASSES </option>
          <option value="1">CLASS 1</option>
          <option value="2">CLASS 2</option>
          <option value="3">CLASS 3</option>
        
        </select>

        <select >
        
        <option>SELECT DIVISION </option>
        <option>Division A </option>
        <option>Division B </option>
        <option>Division C </option>
        <option>Division D </option>
      
      </select>   
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success  me-3" type="submit">Search</button>
      </form>
      <br/>
      <button type="button" class="btn btn-warning" onClick={() => {setOpenModel(true)}}>Add New Class</button>
    </div>
  </div>
</nav>

      
      <TeacherTable></TeacherTable>
    </div>
  )
}


const FacultyPage = () => {
  return (
    <PageBody Comp={Faculty}></PageBody>
  )
}

export default FacultyPage