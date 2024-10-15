import React from 'react';
import { Customer } from '../pages/CustomersPage';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import { deleteCustomer } from '../store';
import { useDispatch } from 'react-redux';

interface CustomerCardProps {
  item: Customer,
  index: number
}


const CustomerCard = ({ item, index }: CustomerCardProps) => {

  const dispatch = useDispatch();

  const handleDeleteCustomer = () => {
    dispatch(deleteCustomer(index));
  };

  return (
    <Paper elevation={2} >
      <p><strong>{item.name}</strong></p>
      <p>{item.description}</p>
      <Fab color="primary" aria-label="add" onClick={handleDeleteCustomer}>
        <DeleteIcon />
      </Fab>
    </Paper>
  )
}

export default CustomerCard;
