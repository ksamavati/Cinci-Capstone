import React, { useEffect, useState, useLayoutEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, useGoogleMap } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: 39.1031,
  lng: -84.5120
};

function MapElement() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"
  })

  const [map, setMap] = React.useState(null)
  const [locArr, setLocArr] = React.useState([])
  const [locIDs, setLocIDs] = React.useState([])

	// Runs once at page load
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
				axios.get('https://discovercincinnati.herokuapp.com/locationsdb/')
				.then(response => {
					setLocArr(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
		// If no category, load all locations
			axios.get('/locationsdb/')
			.then(response => {
				setLocArr(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		}
	},[]);

	
	// Runs when locArr gets updated
	useEffect(() => {
		if (locArr.length !== 0 && typeof locArr !== 'undefined') {
			setLocIDs(locArr.map(loc => {

			}));
		}
	},[locArr]);


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);


	const getMarkers = (locArr) => {

	}


	const position = {
		lat: 39.103119,
		lng: -84.512016
	};


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
				<Marker	position={position} />
				<Marker	position={{
					lat: 39.101119,
					lng: -84.512016
				}} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapElement)