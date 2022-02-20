import React, { useState } from 'react';

import Container from '@mui/material/Container';
import PatientDirectory from '../patient-directory/patient-directory.component';
import NavigationTabBar from '../navigation-tab/navigation-tabBar.component';

import './patient-page.styles.scss';

import PatientData from './../../data.json';


export const PatientListContext = React.createContext();


const PatientPage = () => {
    const [patientList, setPatientList] = useState(PatientData);
    const [patientListFiltered, setPatientListFiltered] = useState(PatientData);
    const [patientCount, setPatientCount] = useState({inactive: 2, randomized: 1, all: patientList.length});

    return (
    <div className='patient-page'>
        <Container maxWidth="lg">
        <h1>Patients</h1>
        
        <PatientListContext.Provider value={{patientListFiltered, setPatientListFiltered, patientList, setPatientList, patientCount, setPatientCount}} >
            <NavigationTabBar />
            <PatientDirectory />
        </PatientListContext.Provider>
        </Container>
    </div>)
}

export default PatientPage;