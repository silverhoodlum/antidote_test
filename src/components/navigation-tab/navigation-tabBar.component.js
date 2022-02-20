import React, { useState, useContext } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './navigation-tabBar.styles.scss';

import {PatientListContext} from '../patient-page/patient-page.component';


const NavigationTabBar = () => {
    const [currentTab, setCurrentTab] = useState("all");
    const {setPatientListFiltered, patientList, patientCount} = useContext(PatientListContext);

    /* function that updates patients list when tab is clicked */
    const filterPatients = tabName => {
        if(tabName === "all"){
            return patientList;
        }else{
            return patientList.filter( patient => {
                return patient.status === tabName
            })
        }
    }

    /* function that handles tab click */
    const handleChange = (e, newValue) =>{
        setCurrentTab(newValue);
        setPatientListFiltered(filterPatients(newValue));
        console.log(patientList)
    }
    return (
        <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="secondary tabs example"
        className="navigation-tabs"
        >
            <Tab value="inactive" label={"Inactive (" + patientCount.inactive + ")"} />
            <Tab value="randomized" label={"Randomized (" + patientCount.randomized + ")"} />
            <Tab value="all" label={"All (" + patientCount.all + ")"} />
        </Tabs>
    )
}

export default NavigationTabBar;