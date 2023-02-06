import React, { useEffect, useState } from 'react'
import './expiredBlood.css'
import axios from '../../axios'
import { useSelector } from 'react-redux'
const ExpiredBlood = () => {
    const [organisation,setorganisation]=useState("");
    const orgEmail =useSelector(state=>state.organisation.organisation)
    const [expiredBlood,setexpiredBlood]=useState([])
    useEffect(()=>{
        axios.post('/find_organisation',{orgEmail}).then((res)=>
        {
          console.log(res.data.data.organisationname)
          setorganisation(res.data.data.organisationname)
    
        }).catch((err)=>console.log(err))
      },[])
    useEffect(()=>{
        axios.post('/expired_blood/all',{organisation}).then((res)=>{
            setexpiredBlood(res.data)
        })
    },[organisation])
    console.log(expiredBlood)
  return (
    <div className='expiredBloodContainer'>
      <div className="expiredBloodWrapper">
        {
            expiredBlood.map((blood)=>{
                return (
                    <div className='card'>
                        <div className='top'>
                            <span>{blood.donorId}</span>
                            <span>{blood.donationDate}</span>
                        </div>
                        <div className='middle'>
                            <span>{blood.bloodGroup}</span>
                            <span>{blood.component}</span>
                            <span>{blood.units} Units</span>
                        </div>
                        <div className="bottom">
                            <p>Staff Handled:<span>{blood.staffHandled}</span></p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ExpiredBlood

// bloodGroup
// : 
// "O positive"
// bloodStatus
// : 
// "processing"
// component
// : 
// "RBC"
// donationDate
// : 
// "2023-02-05"
// donorId
// : 
// "63df372c86b3a619e9c039a4"
// expiryDate
// : 
// "2023-02-01"
// isExpired
// : 
// true
// organisation
// : 
// "apollo"
// staffHandled
// : 
// "63df361486b3a619e9c03997"
// units
// : 
// 1
// __v
// : 
// 0
// _id
// : 
// "63df3a78a90251e534e35dae"