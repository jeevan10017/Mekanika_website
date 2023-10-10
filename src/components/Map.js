import React from 'react';

const Map = () => {
  // Coordinates for the specific location
  const latitude = 22.319409049667126;
  const longitude = 87.31303681415538;
  const radius = 100; // Radius in meters

  // Construct the Google Maps URL with the specified location and radius
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR-API-KEY&center=${latitude},${longitude}&zoom=17&source=embed&radius=${radius}`;

  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src={googleMapsUrl}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}

export default Map;
