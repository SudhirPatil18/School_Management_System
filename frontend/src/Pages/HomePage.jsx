import React from 'react'
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigateTo = useNavigate();

  

  return (
    <div>HomePage

      <button  onClick={()=>navigateTo("/login")}> Login </button>
      <button onClick={()=>navigateTo("/register")} > register </button>
      <button onClick={()=>navigateTo("/admin/dashboard")} > admin dashboard </button>
      <button onClick={()=>navigateTo("/admin/classes")} > Classes Division </button>

    </div>
  )
}

export default HomePage