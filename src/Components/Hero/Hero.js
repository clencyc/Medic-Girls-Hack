import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../Hero/Hero.css';

// Mock data for health facilities
const healthFacilities = [
  { id: 1, name: 'Health Facility A', lat: -1.286389, lng: 36.817223 },
  { id: 2, name: 'Health Facility B', lat: -1.292222, lng: 36.821944 },
  // Add more facilities as needed
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [nearestFacility, setNearestFacility] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);

  useEffect(() => {
    // Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  useEffect(() => {
    if (currentPosition) {
      // Calculate nearest facility
      const distances = healthFacilities.map((facility) => {
        return {
          ...facility,
          distance: getDistance(
            currentPosition.lat,
            currentPosition.lng,
            facility.lat,
            facility.lng
          ),
        };
      });

      // Sort by distance and get the nearest facility
      distances.sort((a, b) => a.distance - b.distance);
      setNearestFacility(distances[0]);
    }
  }, [currentPosition]);

  // Calculate distance between two coordinates
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const handleSearch = () => {
    // Use a geocoding API to convert searchQuery into coordinates
    // For demonstration, let's assume a static location for the searched query
    // Replace this with actual geocoding logic
    const location = { lat: -1.290, lng: 36.810 }; // Example coordinates
    setSearchedLocation(location);
  };

  return (
    <div className='container-home' id='home'>
      <div className='map-container'>
        <MapContainer center={currentPosition || [-1.286389, 36.817223]} zoom={10} style={{ height: '60vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {currentPosition && (
            <>
              <Marker position={[currentPosition.lat, currentPosition.lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' })}>
                <Popup>
                  {t('kenyaMapPopup')}
                </Popup>
              </Marker>
              {nearestFacility && (
                <>
                  <Marker position={[nearestFacility.lat, nearestFacility.lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' })}>
                    <Popup>
                      {nearestFacility.name} - {nearestFacility.distance.toFixed(2)} km away
                    </Popup>
                  </Marker>
                  <Circle center={[nearestFacility.lat, nearestFacility.lng]} radius={5000} color="red" />
                </>
              )}
              {searchedLocation && (
                <>
                  <Marker position={[searchedLocation.lat, searchedLocation.lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' })}>
                    <Popup>
                      {t('searchButton')}
                    </Popup>
                  </Marker>
                  <Circle center={[searchedLocation.lat, searchedLocation.lng]} radius={3000} color="green" />
                </>
              )}
            </>
          )}
        </MapContainer>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          className='search-bar'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>{t('searchButton')}</button>
      </div>
    </div>
  );
};

export default Hero;
