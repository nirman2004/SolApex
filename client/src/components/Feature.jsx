// src/components/MapComponent.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapComponent = () => {
  const [positions, setPositions] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [mapStyle, setMapStyle] = useState('satellite');
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user's location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPositions([...positions, [e.latlng.lat, e.latlng.lng]]);
      },
    });
    return null;
  };

  const handleStyleChange = (e) => {
    setMapStyle(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        const newLocation = [parseFloat(lat), parseFloat(lon)];
        setUserLocation(newLocation);

        // Use the map instance to set the new view
        const map = mapRef.current;
        if (map) {
          map.flyTo(newLocation, zoomLevel);
        }
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location: ', error);
    }
  };

  const zoomLevel = 16;

  const tileLayerUrl =
    mapStyle === 'satellite'
      ? `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`
      : `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

  return (
    <div>
      <select onChange={handleStyleChange} value={mapStyle}>
        <option value="satellite">Satellite</option>
        <option value="street">Street Map</option>
      </select>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter place name"
        />
        <button type="submit">Search</button>
      </form>
      {userLocation ? (
        <MapContainer
          key={userLocation.toString()}  // Force re-render on location change
          center={userLocation}
          zoom={zoomLevel}
          style={{ height: '500px', width: '100%' }}
          whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
        >
          <TileLayer url={tileLayerUrl} />
          <MapClickHandler />
          {positions.length > 0 && (
            <Polygon positions={positions} />
          )}
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
