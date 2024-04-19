import React from 'react'
import './macro.css'

const Modal = ({setOpenModel}) => {
  return (
           <div className='main1'>
         <div className='add'>
         
           <h2>Form</h2>
       
       <form id='add' method='post'> 
             <select className="form-select" aria-label="Default select example">
               <option selected>SELECT CLASS</option>
               <option value="1">CLASS 1</option>
               <option value="2">CLASS 2</option>
               <option value="3">CLASS 3</option>
               <option value="4">CLASS 4</option>
               <option value="5">CLASS 5</option>
               <option value="6">CLASS 6</option>
               <option value="7">CLASS 7</option>
               <option value="8">CLASS 8</option>
               <option value="9">CLASS 9</option>
             </select>
             
             <br/> 
             <select className="form-select" aria-label="Default select example">
             <option selected>SELECT DIVISION</option>
             <option value="1">DIVISION A</option>
             <option value="2">DIVISION B</option>
             <option value="3">DIVISION C</option>
             </select>
   
         <div id='btn' className='flex-center-center btn-collection'>
             <button type="button" class="btn btn-success" >ADD</button>
             <button type="button" class="btn btn-danger" onClick={() => {setOpenModel(false)}} >CANCLE</button>
         </div>
     </form>
     </div>
    
    
   
   
   </div>
  )
}

export default Modal;
