import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertConstext } from './AlertContext';
import "./Alert.scss"

export const Alerts = () =>{

    const {alert, hide} = useContext(AlertConstext);

    if(!alert.visible){
        return null
    }

    return (
      <div onClick={hide} style={{position: 'fixed'}}>
        <Stack className="Alert" spacing={2}>
          <Alert severity={`${alert.type || "warning"}`}>
            {alert.text}
          </Alert>
        </Stack>
      </div>
    );
}