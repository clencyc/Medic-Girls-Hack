import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../Hero/Hero.css';

// Mock data for health facilities
const healthFacilities = [
  { id: 1, name: 'Health Facility A', lat: -1.286389, lng: 36.817223 },
  { id: 2, name: 'Health Facility B', lat: -1.292222, lng: 36.821944 },
  // Add more facilities as needed
];

// Custom hook to handle zooming
const ZoomToLocation = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView(location, 15); // Zoom level set to 15 for close-up
    }
  }, [location, map]);

  return null;
};

const Hero = () => {
  const { t } = useTranslation();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [nearestFacility, setNearestFacility] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [geoError, setGeoError] = useState(null);

  useEffect(() => {
    // Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setGeoError(null); // Reset error if position is obtained
      },
      (error) => {
        handleGeolocationError(error);
      }
    );
  }, []);

  const handleGeolocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setGeoError(t('geoErrorPermissionDenied'));
        break;
      case error.POSITION_UNAVAILABLE:
        setGeoError(t('geoErrorPositionUnavailable'));
        break;
      case error.TIMEOUT:
        setGeoError(t('geoErrorTimeout'));
        break;
      default:
        setGeoError(t('geoErrorUnknown'));
        break;
    }
  };

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
    if (searchQuery.trim() === '') {
      alert(t('searchAlert')); // Handle empty search query
      return;
    }

    // Use a geocoding API to convert searchQuery into coordinates
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const location = {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          };
          setSearchedLocation(location);

          // Zoom into the searched location
          setCurrentPosition(location);
        } else {
          alert(t('noResultsFound'));
        }
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
        alert(t('errorFetchingData'));
      });
  };

  return (
    <div className='container-home' id='home'>
      {geoError && <div className="geo-error">{geoError}</div>}
      <div className='map-container'>
        <MapContainer center={currentPosition || [-1.286389, 36.817223]} zoom={10} style={{ height: '60vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {currentPosition && (
            <>
              <ZoomToLocation location={currentPosition} />
              <Marker position={[currentPosition.lat, currentPosition.lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' })}>
                <Popup>
                  {t('kenyaMapPopup')}
                </Popup>
              </Marker>
              {nearestFacility && (
                <>
                  <Marker position={[nearestFacility.lat, nearestFacility.lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', iconSize: [50, 50] })}>
                    <Popup>
                      {nearestFacility.name} - {nearestFacility.distance.toFixed(2)} km away
                    </Popup>
                  </Marker>
                  <Circle center={[nearestFacility.lat, nearestFacility.lng]} radius={5000} color="red" />
                </>
              )}
              {searchedLocation && (
                <>
                  <Marker position={[searchedLocation.lat, searchedLocation.lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', iconSize: [50, 50] })}>
                    <Popup>
                      {t('searchedLocationPopup')}
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
          aria-label="Search for a location"
          className='search-bar'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>{t('searchButton')}</button>
      </div>
      {nearestFacility && currentPosition && (
        <div className="distance-info">
          <p>{t('distanceToNearestFacility')} {nearestFacility.distance.toFixed(2)} km</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
