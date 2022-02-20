import React, { useState } from 'react';

import './homepage.styles.scss';

import PatientPage from '../patient-page/patient-page.component';



const Homepage = () => {
    
    return (
    <div className='homepage'>
       <PatientPage />
    </div>)
}

export default Homepage;