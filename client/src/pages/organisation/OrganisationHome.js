import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './organisationHome.css'
import axios from '../../axios'
const OrganisationHome = () => {
  const [organisation,setorganisation]=useState("");
  const orgEmail =useSelector(state=>state.organisation.organisation)
  useEffect(()=>{
    axios.post('/find_organisation',{orgEmail}).then((res)=>
    {
      console.log(res.data.data.organisationname)
      setorganisation(res.data.data.organisationname)

    }).catch((err)=>console.log(err))
  },[])
    const navigate=useNavigate();
    const handleAddStaff=()=>{
      navigate('/staffs/signup');
    }
    const handleExpiredBloods=()=>{
      axios.post('/expired_blood',{organisation}).then((res)=>{
        console.log(res.data)
      }).catch(err=>console.log(err));
    }
  return (
    <div className='organisationHomeContainer'>
      <div className='organisationHomeWrapper'>
        <button onClick={handleAddStaff}>Add Staffs</button>
        <button onClick={handleExpiredBloods}>Remove Expired Bloods</button>
        <button onClick={()=>navigate('/expired_blood/all')}>View Expired Bloods</button>
      </div>
    </div>
  )
}
export default OrganisationHome
