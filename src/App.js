import SuccessAlert from './components/SuccessAlert';
import WarningAlert from './components/WarningAlert';
import ErrorAlert from './components/ErrorAlert';
import MainPage from './layout/MainPage';
import { useEffect, useState } from 'react';
import { loadMap } from './redux/google/googleAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const [openSnackbarError, setOpenSnackbarError] = useState({
    message: error,
    status: false,
  });

  useEffect(() => {
    dispatch(loadMap());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error.length !== 0) {
      setOpenSnackbarError({
        message: error,
        status: true,
      });
    }
    if (error.length === 0) {
      setOpenSnackbarError({
        message: '',
        status: false,
      });
    }
  }, [error]);

  return (
    <div style={{ borderBlock: 0, margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
      <SuccessAlert />
      <WarningAlert />
      <ErrorAlert
        open={openSnackbarError.status}
        onClose={() => setOpenSnackbarError({ message: '', status: false })}
        errorMessage={openSnackbarError.message}
      />
      <MainPage />
    </div>
  );
}

export default App;
