import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosPeople } from 'react-icons/io';
import { useState } from 'react';

function Landinguser() {
  const [families, setFamilies] = useState([]);
  const fetchCitizen = () => {
  fetch("http://localhost:4000/api/UH/v1/citizen/list")
  .then((res) => res.json())
  .then((data) => {
    setFamilies(data.citizen);
  });
};

    useEffect(() => {
        AOS.init({duration: 1000});
        fetchCitizen();
      }, []);
  return (

    <>
    <div className='user-landing'>
      <h2 data-aos="fade-down" className='h2-user'>WELCOME TO </h2>
        <br />
        
        
         <h1 data-aos="fade-up" className='h1-user'>UMUDUGUDU-HUB </h1>
    </div>

    <div className='user-leftside' data-aos="fade-up">
        <h2 className='user-count'>Number Of Counted Families</h2>
        <p className='user-icoon'><IoIosPeople size={100} /></p>
        <p className='user-num'>{families.length}</p>
      </div>

    </>
  )
}

export default Landinguser
