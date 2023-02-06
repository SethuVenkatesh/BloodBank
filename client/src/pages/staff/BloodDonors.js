import React, { useEffect, useState } from 'react'
import './bloodDonors.css'
import axios from '../../axios';
import TodayDonor from '../../components/TodayDonor';
import { useSelector } from 'react-redux';
const BloodDonors = () => {
    const organisation=useSelector(state=>state.staff.staff.organisation);
    const [bloodDonors,setbloodDonors]=useState([]);
    const [today,setToday]=useState("");
    const [todayDonors,settodayDonors]=useState([]);
    console.log(organisation)
    useEffect(()=>{
        axios.post("/blood_donors/all",{organisation})
        .then((res)=>{
            setbloodDonors(res.data.data)
        })
        .catch((err)=>console.log(err))

        let currentDate = new Date(Date.now());
        let donationDate=currentDate.getDate(),donationMonth=currentDate.getMonth()+1,donationYear=currentDate.getFullYear();
        if(donationDate<10) donationDate="0"+donationDate;
        if(donationMonth<10) donationMonth="0"+donationMonth;
        setToday(donationYear+"-"+donationMonth+"-"+donationDate)
       
    },[])
    console.log(today)
    useEffect(()=>{
      console.log("total",bloodDonors)
      const donors=bloodDonors?.filter(allbloodDonor => allbloodDonor.donationDate == today)
      console.log("today",donors);
      settodayDonors(donors)
    },[today,bloodDonors])
    const updateDonors=(id)=>{
     const updatedBloodDonors=todayDonors.filter(bloodDonor=>bloodDonor._id!=id);
     settodayDonors(updatedBloodDonors)
    }
  return (
    <div className='bloodDonorsContainer'>
      <div className="bloodDonorsWrapper">
        <div className="donorCountContainer">
            <div className='left'>
              <div>
                <h4>Total Donors Applications</h4>
                <p>: 120</p>
              </div>
              <div>
                <h4>Total Blood Donors</h4>
                <p>: 102</p>
              </div>
            </div>
            <div className="right">
              right
            </div>
        </div>
        <h3>Today Donor Applications</h3>
        <div className='donorTotalContainer'>
          {
            todayDonors.length>=1 ? todayDonors.map(bloodDonor => <TodayDonor bloodDonor={bloodDonor} updateDonors={updateDonors}/>):<h5>No Blood Donors</h5>
          }   
        </div>
      </div>
    </div>

  )
}

export default BloodDonors
