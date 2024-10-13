import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import { CustomersPage } from './pages/CustomersPage';

function App() {
  return (
    <Provider store={store}>
      <CustomersPage />
    </Provider>
  );
}

export default App;
