import { ListAlt, Save, Settings, SignalCellular0Bar } from '@mui/icons-material';
import { Button, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

function NavBar({ activeTab, onTabSwitch }) {
  return (
    <Stack
      p={3}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <ToggleButtonGroup
          color="primary"
          value={activeTab}
          exclusive
          onChange={onTabSwitch}
          aria-label="Platform"
        >
          <ToggleButton sx={{ gap: 1 }} value="data">
            <Settings />
            Data
          </ToggleButton>
          <ToggleButton sx={{ gap: 1 }} value="summary">
            <SignalCellular0Bar />
            Summary
          </ToggleButton>
          <ToggleButton sx={{ gap: 1 }} value="logs">
            <ListAlt />
            Logs
          </ToggleButton>
        </ToggleButtonGroup>

        <Button
          variant='contained'
          startIcon={<Save />}
        >
          Download
        </Button>
      </Stack>
    </Stack>
  );
}

export default NavBar;
