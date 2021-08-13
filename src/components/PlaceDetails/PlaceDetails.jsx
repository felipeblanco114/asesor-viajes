import React from 'react';
import './styles.css';

const PlaceDetails = ({ place }) => {
    return (
        <div>
            <h2>{place.name}</h2>
        </div>
    );
}

export default PlaceDetails;