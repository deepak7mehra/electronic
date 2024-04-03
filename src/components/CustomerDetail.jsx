import React, { useState } from 'react';
 // Remove this import
import { TextField, Button, Typography,} from '@mui/material';

// Remove the makeStyles call and useStyles constant

const CustomerDetail = () => {
  // Remove the useStyles hook

  const [customer, setCustomer] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Customer details submitted:', customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Customer Details
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={customer.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Phone Number"
        name="phoneNumber"
        value={customer.phoneNumber}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={customer.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        style={{ marginTop: '1rem' }}
      >
        Submit
      </Button>
     
     
    </form>
  );
};

export default CustomerDetail;

