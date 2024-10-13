
import React, { useState, useMemo } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import Container from '@mui/material/Container';
import BasicStack from '../components/Stack';
import { useCustomerFilter } from '../hooks/useCustomerFilter';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BasicModal from '../components/NewCustomer';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCustomer, RootState } from '../store';

export interface Customer {
  name: string;
  description: string;
}


export const CustomersPage = () => {

  const customers = useSelector((state: RootState) => state.customers);
  const dispatch = useDispatch();

  const { query, setQuery, filteredCustomers } = useCustomerFilter(customers)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCustomer = () => {
    if (name.trim() && description.trim()) {
      // Despacha la acción para añadir un nuevo cliente
      dispatch(addNewCustomer({ name, description }));

      // Limpia los inputs después de añadir el cliente
      setName('');
      setDescription('');
    } else {
      alert("Por favor, ingresa un nombre y una descripción.");
    }
  };

  return (
    <Container maxWidth="xl">
      <h1>Clientes</h1>
      <TextField
        id="name"
        label="Nombre"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="description"
        label="Descripción"
        variant="standard"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Fab color="primary" aria-label="add" onClick={handleAddCustomer}>
        <AddIcon />
      </Fab>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <BasicStack filteredCustomers={filteredCustomers} />
      <BasicModal />
    </Container>
  )
}

