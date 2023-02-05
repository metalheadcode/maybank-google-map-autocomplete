import React from 'react';
import { Divider, Grid, ListItemIcon, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import AutocompletePlace from '../../components/AutocompletePlace';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapFrame from '../../components/GoogleMapFrame';
import { Stack } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';
import { setPlaceId } from '../../redux/google/googleAction';

function MainPage() {
  const dispatch = useDispatch();
  const pastSearch = useSelector((state) => state.pastSearch);

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Stack p={2} gap={2}>
          <Typography variant="h5">
            <strong>Maybank Assessment</strong>
          </Typography>
          {/* <Divider /> */}
          <AutocompletePlace />
          <Divider />
          <Typography variant="subtitle1">History</Typography>
          {pastSearch.length === 0 && <Typography variant="body2">No search history...</Typography>}
          {pastSearch.length > 0 && (
            <Paper>
              <MenuList>
                {pastSearch.map((location, locationIndex) => (
                  <MenuItem divider key={locationIndex} onClick={() => dispatch(setPlaceId(location.placeId))}>
                    <ListItemIcon>
                      <PlaceIcon fontSize="small" />
                    </ListItemIcon>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                      <Typography variant="body1">
                        <strong>{location.name}</strong>
                      </Typography>
                      <Typography variant="body2">{location.fulladdress.city}</Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <GoogleMapFrame />
      </Grid>
    </Grid>
  );
}

export default MainPage;
