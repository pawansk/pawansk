import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DataTable = ({ data, handleModalClick, rowClickData, rowClass, tableCenter, linkClass, theadClass, tablemargin }) => {

  return (
    <TableContainer component={Paper} className={`${tablemargin ? tablemargin : ''}`}>
      <Table className={`${tableCenter ? tableCenter : ''}`}>
        <TableHead>
          <TableRow className='table_head'>
            {Object.keys(data[0]).map((key, index) => (
              <TableCell key={index} className={`${theadClass ? 'theadClass' : ''}`}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} onClick={rowClickData} className={`${rowClass || ''}`}>

              {Object.entries(row).map(([key, value], cellIndex) => (
                <TableCell key={cellIndex} className={value.className}>
                  <div className={value.tdClass}>
                    {value.link ? (
                      <Link to={value.link} className='msidn-highlight'>{value.value}</Link>
                    ) : (
                      (value.actions && value.actions.length > 0) ? (
                        value.actions.map((action, index) => (
                          <span key={index} className="msidn-highlight-button" onClick={action.onClick}>{action.label}</span>
                        ))
                      ) : (
                        <span>
                          {value.onClick ? (
                            <span
                              onClick={value.onClick}
                              className={value.linkClass}
                            >
                              {value.value}
                            </span>
                          ) : (
                            <span className={value.linkClass}>
                              {value.value}
                            </span>
                          )}
                        </span>
                      )
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
