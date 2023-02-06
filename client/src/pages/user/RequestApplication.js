import React, { useEffect, useState } from 'react'
import './requestApplication.css'
import { useSelector } from 'react-redux'
import axios from '../../axios'
const RequestApplication = () => {

    const [bloodRequest,setbloodRequest]=useState([])
    const userEmail=useSelector(state=>state.user.user);
    useEffect(()=>{
        axios.post("blood_request/all",{userEmail}).then((res)=>{
            setbloodRequest(res.data);
        })
        .catch(err=>console.log(err));
    },[])
    console.log(bloodRequest)
  return (
    <div className='requestApplicationContainer'>
      <div className="requestApplicationWrapper">
          {
            bloodRequest.map((request)=>{
             return (
              <div className='requestInfoCard'>
                  <div className="requestInfoDetail">
                    <h5>Patient Name</h5>
                    <p>{request.patientName}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Reason</h5>
                    <p>{request.reason}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Blood Component</h5>
                    <p>{request.bloodComponent}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Blood Group</h5>
                    <p>{request.patientName}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Units</h5>
                    <p>{request.units}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Request Date</h5>
                    <p>{request.requestDate}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Delivery Address</h5>
                    <p>{request.deliveryAddress}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Organisation Name</h5>
                    <p>{request.organisation}</p>
                  </div>
                  <div className="requestInfoDetail">
                    <h5>Application status</h5>
                    {request.isDelivered ? <p>Delivered</p>:<p>Processing</p>}
                  </div>           
              </div>
             )

             
            })
          }
      </div>
    </div>
  )
}

export default RequestApplication
