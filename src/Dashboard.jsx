import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardHeader, Typography, Button, CardContent, Stack, Chip } from '@mui/material';
import { Settings, Storage } from '@mui/icons-material';

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (tableData?.length) setLoader(false);
  }, [tableData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/sample.json');
        const { table_data, table_headers } = response.data;

        const dynamicColumns = table_headers.map((header) => ({
          field: header.name,
          headerName: header.name.replace(/_/g, ' '),
          width: 150
        }));

        setColumns(dynamicColumns?.filter(e => e?.field !== 'Row'));

        // Transform table_data to match the column names
        const formattedData = table_data.map((row, index) => {
          const rowObject = {};
          table_headers.forEach((header, idx) => {
            rowObject[header.name] = row[idx];
          });
          return { id: index + 1, ...rowObject }; // Add a unique id for DataGrid
        });

        setTableData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card variant='outlined'>
      <CardHeader
        title={
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={3}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={2}
            >
              <Chip
                avatar={<Settings />}
                label='PROJECT NAME'
              />
              <Typography variant='subtitle2'>ETL New Demo 2</Typography>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={2}
            >
              <Chip
                avatar={<Storage />}
                label='OUTPUT DATASET NAME'
              />
              <Typography variant='subtitle2'>ETL N_D2</Typography>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={2}
            >
              <Chip
                label='LAST RUN'
              />
              <Typography variant='subtitle2'>Not Available</Typography>
            </Stack>
          </Stack>
        }
        action={<Typography variant='subtitle2'>Rows: {tableData.length}</Typography>}
      />
      <CardContent>
        <DataGrid
          autoHeight
          columns={columns}
          rows={tableData}
          pageSize={10}
          hideFooter
          loading={loader}
        />
      </CardContent>
    </Card>
  );
};

export default Dashboard;
