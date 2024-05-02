import React from 'react'
import './macro.css'
const AddNewNotice = ({ setOpenModel }) => {
    return (
        <>
            <div className='main1'>
                <div className='add'>

                    <h2>Notice Form</h2>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Share Notice File, image</label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="checkbox-dropdown">
                        <button class="form-select">SELECT CLASS</button>
                        <div class="checkbox-dropdown-content">
                            <label><input type="checkbox" value="1"/> CLASS 1</label>
                            <label><input type="checkbox" value="2"/> CLASS 2</label>
                            <label><input type="checkbox" value="3"/> CLASS 3</label>
                            
                        </div>
                    </div>

                    <br />

                    <div class="checkbox-dropdown">
                        <button class="form-select">SELECT DIVISION</button>
                        <div class="checkbox-dropdown-content">
                            <label><input type="checkbox" value="1"/> DIVISION A</label>
                            <label><input type="checkbox" value="2"/> DIVISION B</label>
                            <label><input type="checkbox" value="3"/> DIVISION C</label>
                           
                        </div>
                    </div>
                    <div id='btn' className='flex-center-center btn-collection'>
             <button type="button" class="btn btn-success" >ADD</button>
             <button type="button" class="btn btn-danger" onClick={() => {setOpenModel(false)}} >CANCLE</button>
         </div>
         
                </div>
            </div>
        </>
    )
}

export default AddNewNotice;
