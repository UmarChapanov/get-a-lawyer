import React from 'react';
import { Route } from 'react-router-dom';
import Consultation from './Consultation/Consultation';
import Trouble from './Trouble/Trouble';
import EmergencyCall from './EmergencyCall/EmergencyCall';
import MainWindow from './MainWindow/MainWindow';


function App () {
    return (
      <>
      <Route path="/" exact component={MainWindow} /> 
      <Route path="/consultation" exact component={Consultation} />
      <Route path="/trouble" exact component={Trouble} />
      <Route path="/emergency" exact component={EmergencyCall} />
      </>
    )
}

export default App;
