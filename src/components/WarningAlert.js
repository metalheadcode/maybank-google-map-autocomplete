import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function WarningAlert({ open, onClose, warningMessage }) {
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
      <Alert severity="warning">{warningMessage}</Alert>
    </Snackbar>
  );
}

export default WarningAlert;
