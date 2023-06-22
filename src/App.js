import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.css';

const App = () => {
  const [p, setP] = useState(0)
  const [t, setT] = useState(0)
  const [r, setR] = useState(0) 
  const [si, setSi] = useState(0)

const CalculateInterest =() => {
  setSi(p*t*r/100)
}

  return (
    <div>
      
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple-interest
          </Typography>
          
        </Toolbar>
      </AppBar>
      <br/>
      <TextField onChange={(event) => setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" /><br/>
      <TextField onChange={(event) => setT(event.target.value)} id="outlined-basic" label="Enter T" variant="outlined" /><br/>
      <TextField onChange={(event) => setR(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" />
      <br/><br/>
      <Button onClick={()=>CalculateInterest()} variant="contained">Calculate</Button>
    
    <Typography variant="h6" gutterBottom component={"div"}>
        Simple interest is: {si}
      </Typography>
    </div>
  );
}

export default App;
