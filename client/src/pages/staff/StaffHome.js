import React from 'react'
import './staffHome.css'
import { useNavigate } from 'react-router-dom'
const StaffHome = () => {
  const navigate=useNavigate();
  return (
    <div className='staffHomeContainer'>
      <div className='staffHomeWrapper'>
        <button onClick={()=>navigate('/blood_donors/all')}>View Blood Donors</button>
        <button onClick={()=>navigate('/waiting_recipients/all')}>View Waiting Recipients</button>
      </div>
    </div>
  )
}

export default StaffHome
