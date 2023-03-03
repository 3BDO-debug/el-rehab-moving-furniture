import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import { Box, Card } from '@mui/material';
//

// -----------------------------------------------------------------------------------------------

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="mdi:map-marker" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

// -----------------------------------------------------------------------------------------------

function Map({ location, zoomLevel }) {
  return (
    <Card sx={{ height: 500, width: 1100 }}>
      <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={location} defaultZoom={zoomLevel}>
        <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
      </GoogleMapReact>
    </Card>
  );
}

export default Map;
