import React, { useContext } from 'react';

import TableBody from '@mui/material/TableBody';

import PatientCard from '../patient-card/patient-card.component';
import {PatientListContext} from './../patient-page/patient-page.component';

import './patient-list.styles.scss'



const PatientList = () => {
    const {patientListFiltered} = useContext(PatientListContext);
        return (
              <TableBody>
                {patientListFiltered.map((patient, index) => (
                    <PatientCard patient={patient} index={index}  key={patient.patientId}/>
                ))}
              </TableBody>
        );
}
export default PatientList;