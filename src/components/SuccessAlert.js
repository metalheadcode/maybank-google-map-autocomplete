import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function SuccessAlert({ open, onClose, successMessage }) {
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
      <Alert severity="warning">{successMessage}</Alert>
    </Snackbar>
  );
}

export default SuccessAlert;
