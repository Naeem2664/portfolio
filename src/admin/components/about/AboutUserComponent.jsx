import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { Link } from 'react-router-dom';
import '../../styles/about.css'

function createData(name,whatsapp, email, github, linkedin, address,bio, city, country) {
  return { name,whatsapp, email, github, linkedin, address,bio, city, country};
}

const rows = [
  createData('Muhammad Naeem', "+923032664863", "qPw5W@example.com", "https://github.com/naeem-muhammad", "https://www.linkedin.com/in/naeem-muhammad", "I am Muhammad Naeem s student","Shalimar Chowk near Aljannat CNG","Sadiqabad","Pakistan"),
  
];

export default function SkillsComponent() {
  return (
    <div className="container" style={{marginBottom:'200px'}}>
      <div className="row">
        <div className="col">
          <h3 className='text-center m-5 head-text'>About Me </h3>
        </div>
      </div>
      <div className="row education-section">
        <div className="col">
            <Link to="/admin/about_user/add-new">
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
          '--Table-firstColumnWidth': '60px',
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
              <th style={{ width: 200 }}>Name</th>
              <th style={{ width: 200 }}>Whatsapp</th>
              <th style={{ width: 200 }}>Email</th>
              <th style={{ width: 200 }}>Github</th>
              <th style={{ width: 200 }}>LinkedIn</th>
              <th style={{ width: 200 }}>Bio</th>
              <th style={{ width: 200 }}>Address</th>
              <th style={{ width: 200 }}>City</th>
              <th style={{ width: 200 }}>Country</th>

              <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.whatsapp}</td>
                <td>{row.email}</td>
                <td>{row.github}</td>
                <td>{row.linkedin}</td>
                <td>{row.bio}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.country}</td>
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
