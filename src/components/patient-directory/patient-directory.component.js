import React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './patient-directory.styles.scss'
import PatientList from '../patient-list/patient-list.component';

/* style table header */
const HeaderTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child th': {
    paddingLeft: "24px"
  },
  '&:last-child th:last-of-type': {
    borderLeft: " 1px solid #e0e0e0" 
  }
}));

const PatientDirectory = () => {
        return (
          <TableContainer component={Paper} className="table-patients">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <HeaderTableRow>
                  <TableCell>Patient Details</TableCell>
                  <TableCell align="right"></TableCell>
                </HeaderTableRow>
                
              </TableHead>

              <PatientList />
              
            </Table>
          </TableContainer>
        );
}
export default PatientDirectory;