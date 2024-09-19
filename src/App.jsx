import React, { useState } from 'react';

import Dashboard from './Dashboard';
import Workflow from './Workflow';
import './App.css';
import NavBar from './Navbar';
import { Stack } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState('data');

  // Handler to switch between views
  const handleTabSwitch = (tab, value) => {
    setActiveTab(value);
  };

  const GetTabComponent = () => {
    switch (activeTab) {
      case 'data':
        return <Dashboard />
      case 'summary':
        return (
          <Stack>
            Coming Soon !
          </Stack>
        )
      case 'logs':
        return (
          <Stack>
            Coming Soon !
          </Stack>
        )
      default:
        break;
    }
  }

  return (
    <Stack
      direction={'row'} 
      spacing={2}
    >
      <Stack width={'75%'}>
        <NavBar activeTab={activeTab} onTabSwitch={handleTabSwitch} />
        {GetTabComponent()}
      </Stack>
      <Workflow />
    </Stack>
  );
}

export default App;
