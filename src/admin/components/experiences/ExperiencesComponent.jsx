import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { Link } from 'react-router-dom';
import '../../styles/experience.css'

function createData(job_title, start_date, end_date, company, city,tasks) {
  return { job_title, start_date, end_date, company, city,tasks};
}

const rows = [
  createData('MERN Stack Developer', "01/2022", "05/2022", "xyz","Sadiqabad","Web Development"),
  createData('Reac.js Developer', "01/2024", "Present", "xyz","Sadiqabad","Web Development"),

  
];

export default function SkillsComponent() {
  return (
    <div className="container" style={{marginBottom:'200px'}}>
      <div className="row">
        <div className="col">
          <h3 className='text-center m-5 head-text'>Experiences </h3>
        </div>
      </div>
      <div className="row education-section">
        <div className="col">
            <Link to="/admin/experiences/add-new">
            <div className="btn btn-success mt-1 mb-5">

            Add New
          </div>
            </Link>
        </div>
      <Box sx={{ width: '100%' }}>
      <Sheet
        variant="outlined"
        sx={(theme) => ({
          '--TableCell-height': '40px',
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        })}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 200 }}>Job Title</th>
              <th style={{ width: 200 }}>Company</th>
              <th style={{ width: 200 }}>Start Data</th>
              <th style={{ width: 200 }}>End Date/Present</th>
              <th style={{ width: 200 }}>City</th>
              <th style={{ width: 200 }}>Tasks</th>

              <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.job_title}>
                <td>{row.job_title}</td>
                <td>{row.company}</td>
                <td>{row.start_date}</td>
                <td>{row.end_date}</td>
                <td>{row.city}</td>
                <td>{row.tasks}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button>
                    <Button size="sm" variant="soft" color="danger">
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
      </div>
      
     

    </div>
    
  );
}
