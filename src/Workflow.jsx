import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Typography,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Build, CalendarToday, Cancel, Download, Refresh, Save } from '@mui/icons-material';

const WorkflowPanel = () => {
  const [sections, setSections] = useState([
    {
      title: 'DATASET SELECTION',
      content: { name: 'Brick Data' },
      defaultMessage: 'No dataset selected',
      expanded: true,
    },
    {
      title: 'NEW',
      content: null,
      defaultMessage: 'No new data available',
      expanded: false,
    },
    {
      title: 'AGGREGATE',
      content: null,
      defaultMessage: 'No aggregate data available',
      expanded: false,
    },
    {
      title: 'CLEAN',
      content: null,
      defaultMessage: 'No clean data available',
      expanded: false,
    },
    {
      title: 'DEDUPE',
      content: null,
      defaultMessage: 'No dedupe data available',
      expanded: false,
    },
    {
      title: 'JOIN',
      content: {
        type: 'inner',
        extras: '[object Object]',
        left_columns: 'Territory',
        right_columns: 'Territory',
        dataset2_name: 'ETL N_D2_FRK1',
      },
      defaultMessage: 'No join data available',
      expanded: true,
    },
  ]);

  const renderSectionContent = (content, defaultMessage) => {
    if (content) {
      return (
        <Typography variant="body2">
          {Object.entries(content).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
        </Typography>
      );
    } else {
      return <Typography variant="body2">{defaultMessage}</Typography>;
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, width: 300 }}>
      <Stack mb={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={1}>
        <Typography variant="h6" gutterBottom>
          Workflow
        </Typography>
        <Stack direction={'row'}>

          <IconButton size="small">
            <Cancel color="primary" />
          </IconButton>
          <IconButton size="small">
            <Download color="primary" />
          </IconButton>
          <IconButton size="small">
            <Refresh color="primary" />
          </IconButton>
          <IconButton size="small">
            <Save color="primary" />
          </IconButton>
          {/* <IconButton size="small">
          <Build color="primary" />
        </IconButton>
        <IconButton size="small">
          <CalendarToday color="disabled" />
        </IconButton> */}
        </Stack>

      </Stack>

      {sections?.map((section, index) => (
        <Accordion key={index} defaultExpanded={section?.expanded}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">{section?.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {renderSectionContent(section?.content, section?.defaultMessage)}
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default WorkflowPanel;
