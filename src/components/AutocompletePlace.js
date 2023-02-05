import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { autocompletePlaces } from '../redux/google/googleAction';
import { useRef } from 'react';

function AutocompletePlace() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const changeHandler = (event) => {
    if (inputRef.current !== null) {
      dispatch(autocompletePlaces(inputRef.current));
    }
  };

  return <TextField inputRef={inputRef} size="small" label="Search location..." fullWidth onChange={changeHandler} />;
}

export default AutocompletePlace;
