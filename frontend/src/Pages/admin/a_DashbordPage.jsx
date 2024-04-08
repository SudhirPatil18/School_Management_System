import React from 'react'
import PageBody from '../../Components/macro-Components/PageBody'
 

 const Dashbord = () => {
  return (
    <div>Dashbord</div>
  )
}

   


const DashbordPage = () => {
  return (
    <div>
        <PageBody Comp={Dashbord}></PageBody>
    </div>
  )
}

export default DashbordPage