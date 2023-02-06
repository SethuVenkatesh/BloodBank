import React from 'react'
import { useSelector } from 'react-redux'
import './userHome.css'
import { useNavigate } from 'react-router-dom'
const UserHome = () => {
    const navigate=useNavigate();
    const user=useSelector(state=>state.user.user)
    console.log(user)
  return (

    <div className='userHome'>
      <div className='buttons'>
        <button onClick={()=>navigate("/donor_registration")}>Donor Registration</button>
        <button onClick={()=>navigate("/donor_registration/all")}>View Donor Application</button>
        <button onClick={()=>navigate("/recipient_registration")}>Blood Request</button>
        <button onClick={()=>navigate("/blood_request/all")}>View Blood Requests</button>
      </div>
    </div>
  )
}

export default UserHome
