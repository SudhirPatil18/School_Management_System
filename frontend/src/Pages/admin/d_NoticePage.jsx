import React from 'react'
import PageBody from "../../Components/macro-Components/PageBody";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useState } from 'react';
import AddNewNotice from '../../Components/macro-Components/AddNewNotice';

const Notice = () => {
  const [openModal, setOpenModel] = useState(false);
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <br />
        <button type="button" class="btn btn-warning" onClick={() => { setOpenModel(true) }}>Add New Notice</button>
      </div>
    </nav>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
        <input type="file" accept=".pdf,.png" name="fileUpload"/>
      </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      {
        openModal === true ? <AddNewNotice setOpenModel={setOpenModel} /> : null
      }

    </>
  )
}




const NoticePage = () => {
  return (
    <PageBody Comp={Notice}></PageBody>
  )
}

export default NoticePage