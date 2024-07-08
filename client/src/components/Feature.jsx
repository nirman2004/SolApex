import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Feature = () => {

  const [positions, setPositions] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [mapStyle, setMapStyle] = useState('satellite'); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          console.log(latitude, longitude);
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
      {userLocation ? (
        <MapContainer 
          center={userLocation} 
          zoom={16} 
          style={{ height: '500px', width: '100%' }}
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
  )
}

export default Feature
