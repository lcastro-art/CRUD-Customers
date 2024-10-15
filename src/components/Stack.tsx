import * as React from 'react';
import Stack from '@mui/material/Stack';
import CustomerCard from './CustomerCard';
import { Customer } from '../pages/CustomersPage';

interface BasicStackProps {
    filteredCustomers: Customer[];
  }
  

export default function BasicStack({filteredCustomers}: BasicStackProps ) {
    return (
        <Stack spacing={2} >
            {filteredCustomers.map((item, index) => (
                <CustomerCard key={index} item={item} index={index} />
            ))}

        </Stack>
    );
}

