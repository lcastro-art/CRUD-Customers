import { useState, useMemo } from 'react';
import { Customer } from '../pages/CustomersPage';

export const useCustomerFilter = (customers: Customer[]) => {
  const [query, setQuery] = useState('');

  const filteredCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, customers]);

  return {
    query,
    setQuery,
    filteredCustomers,
  };
};
