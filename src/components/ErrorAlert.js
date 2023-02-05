import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function ErrorAlert({ open, onClose, errorMessage }) {
  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'top',
      }}
      autoHideDuration={3000}
      open={open}
      onClose={onClose}
    >
      <Alert severity="warning">{errorMessage}</Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
