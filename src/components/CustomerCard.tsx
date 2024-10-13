import React from 'react';
import { Customer } from '../pages/CustomersPage';
import Paper from '@mui/material/Paper';

interface CustomerCardProps {
  item: Customer
}


const CustomerCard = ({item}: CustomerCardProps) => {
  return (
    <Paper elevation={2} >
        <p><strong>{item.name}</strong></p>
        <p>{item.description}</p>
    </Paper>
  )
}

export default CustomerCard;
