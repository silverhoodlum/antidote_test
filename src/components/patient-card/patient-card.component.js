import React, { useContext } from 'react';

import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {PatientListContext} from './../patient-page/patient-page.component';
import './patient-card.styles.scss'

/* style table rows */
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#f7f7f5;",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:last-child td, td': {
    borderLeft: " 1px solid #e0e0e0",
    textAlign: 'center',
    fontWeight: 500,
    color: "#555758"
  }
}));


const PatientCard = props => {
    const {patient, index} = props;
    const {setPatientListFiltered, patientList, setPatientList, setPatientCount} = useContext(PatientListContext);

    /* function that handles button clicks */
    const changeStatus = (status, indexToUpdate) => {
      const newPatientList = patientList.map((patient, index) => {
        return index === indexToUpdate ? {...patient, status : status} : patient
      });
      /* update both patients lits */
      setPatientListFiltered(newPatientList);
      setPatientList(newPatientList);
      /* update tab count */
      setPatientCount((prevPatientCount) => ({...prevPatientCount, [status]: prevPatientCount[status] + 1}));
    }
        return (
                <StyledTableRow key={patient.patientId}>
                <TableCell component="th" scope="row" className="cell-main">
                    <div className="patient-name">{patient.patientId} - {patient.account.firstName} {patient.account.lastName}</div>
                    <div className="patient-address">{patient.sex}{patient.sex && ', '}  {patient.age}{patient.age && ', '} {patient.location.city}, {patient.location.state}</div>
                    <div className="patient-contact">{patient.account.phone}{patient.account.phone && ', '} <a href={"mailto:" +patient.account.email}>{patient.account.email}</a></div>
                </TableCell>
                <TableCell align="right" className="cell-btn">
                {/* show buttons if patient has no status */}
                    {
                    patient.status === "randomized"
                    ?  <p>Randomized</p>
                    :  patient.status === "inactive"
                    ?  <p>Inactive</p>
                    : <Stack spacing={1}>
                    <Button variant="outlined" className="btn btn-randomized" onClick={() => changeStatus("randomized", index)}>Randomize</Button>
                    <Button variant="outlined" className="btn btn-inactive" onClick={() => changeStatus("inactive", index)}>Inactivate</Button>
                    </Stack>
                    }
                </TableCell>
                </StyledTableRow>
        );
}

export default PatientCard;