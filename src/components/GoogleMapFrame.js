import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function GoogleMapFrame() {
  const [mapUrl, setMapUrl] = useState('');

  const mapLocationUrl = useSelector((state) => state.mapLocationUrl);

  useEffect(() => setMapUrl(mapLocationUrl), [mapLocationUrl]);

  return (
    <iframe
      title="google-map"
      style={{ border: 0, width: '100%', height: '100vh', margin: 0, padding: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      src={mapUrl}
    />
  );
}

export default GoogleMapFrame;
