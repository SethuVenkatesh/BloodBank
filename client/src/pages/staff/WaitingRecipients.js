import React, { useEffect, useState } from 'react'
import './waitingRecipient.css'
import axios from '../../axios'
import { useSelector } from 'react-redux';
const WaitingRecipients = () => {
    const [recipients,setrecipients]=useState([]);
    const organisation=useSelector(state=>state.staff.staff.organisation)
    useEffect(()=>{
        axios.post('/recipients/all',{organisation}).then((res)=>{
            setrecipients(res.data)
        })
    },[])
    const handleAccept=(recipient)=>{
        axios.post('/deliver_blood',{recipient}).then((res)=>{
            console.log(res.data)
        }).catch(err=>console.log(err))
    }
    console.log(recipients)
  return (
    <div className='waitingContainer'>
      <div className="waitingWrapper">
        {
            recipients.map((recipient)=>{
                return (
                    <div className='recipientCard'>
                        <div className="left">
                            <strong>{recipient.patientName}</strong>
                        </div>
                        <div className="middle">
                            <p>{recipient.bloodComponent}</p>
                            <p>{recipient.bloodGroup}</p>
                            <p>{recipient.deliveryAddress}</p>
                            <p>{recipient.reason}</p>
                        </div>
                        <div className="right">
                            <button onClick={()=>handleAccept(recipient)}>Accept</button>
                        </div>
                    </div>
                )
            })
        }

      </div>
    </div>
  )
}

export default WaitingRecipients
