import { useState } from "react";
import React from "react";
import PageBody from "../../Components/macro-Components/PageBody";
import "./admin.css"
import Modal from "../../Components/macro-Components/Modal";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const ClassDivision = () => {

  const [openModal, setOpenModel] = useState(false)
  
  return <div>
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

<div className="divParentBox">
 <div className="box">
  <div className="flex-center-center gap10" >
      <h6>1st</h6>
      <h6>A</h6>
  </div>
  <div className="btn-box flex-center-center ">
  <button type="button" class="btn btn-warning me-3"><EditIcon></EditIcon><span><small>edit</small></span></button>
  <button type="button" class="btn btn-success me-3"><LockOpenIcon></LockOpenIcon><span><small>Open</small></span></button>
  <button type="button" class="btn btn-danger me-3"> <DeleteForeverIcon></DeleteForeverIcon><span><small>Delete</small></span></button>
  </div>
  </div>
 <div className="box">
  <div className="flex-center-center gap10" >
      <h6>1st</h6>
      <h6>A</h6>
  </div>
  <div className="btn-box flex-center-center ">
  <button type="button" class="btn btn-warning me-3"><EditIcon></EditIcon><span><small>edit</small></span></button>
  <button type="button" class="btn btn-success me-3"><LockOpenIcon></LockOpenIcon><span><small>Open</small></span></button>
  <button type="button" class="btn btn-danger me-3"> <DeleteForeverIcon></DeleteForeverIcon><span><small>Delete</small></span></button>
  </div>
  </div>
 <div className="box">
  <div className="flex-center-center gap10" >
      <h6>1st</h6>
      <h6>A</h6>
  </div>
  <div className="btn-box flex-center-center ">
  <button type="button" class="btn btn-warning me-3"><EditIcon></EditIcon><span><small>edit</small></span></button>
  <button type="button" class="btn btn-success me-3"><LockOpenIcon></LockOpenIcon><span><small>Open</small></span></button>
  <button type="button" class="btn btn-danger me-3"> <DeleteForeverIcon></DeleteForeverIcon><span><small>Delete</small></span></button>
  </div>
  </div>
 <div className="box">
  <div className="flex-center-center gap10" >
      <h6>1st</h6>
      <h6>A</h6>
  </div>
  <div className="btn-box flex-center-center ">
  <button type="button" class="btn btn-warning me-3"><EditIcon></EditIcon><span><small>edit</small></span></button>
  <button type="button" class="btn btn-success me-3"><LockOpenIcon></LockOpenIcon><span><small>Open</small></span></button>
  <button type="button" class="btn btn-danger me-3"> <DeleteForeverIcon></DeleteForeverIcon><span><small>Delete</small></span></button>
  </div>
  </div>
  
</div>
{
  openModal===true ?<Modal setOpenModel={setOpenModel}/> : null
}
 
</div>
  
};

const ClassDivisionPage = () => {
  return (
    <div>
        <PageBody Comp={ClassDivision}></PageBody>
    </div>
  );
};

export default ClassDivisionPage;
