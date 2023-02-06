import React, { useEffect,useState } from 'react'
import './donorApplication.css'
import DonorCard from '../../components/DonorCard'
import axios from '../../axios'
import { useSelector } from 'react-redux'
const DonorApplications = () => {
  const [application,setApplication] = useState([]);
  const userEmail=useSelector(state=>state.user.user);
  useEffect(()=>{
      axios.post("donor_registration/all",{userEmail}).then((res)=>{
      setApplication(res.data)
    }
  )},[]);
  console.log(application)
  return (
    <div className='donorApplicationContainer'>
      <div className="donorApplicationWrapper">
        {
          application.map((detail)=>{
           return <DonorCard detail={detail}/>
          })
        }
      </div>
    </div>
  )
}

export default DonorApplications
