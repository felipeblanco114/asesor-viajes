import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Toolbar, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';
import './styles.css';

const Header = ({ setCoordinates }) => {
    const classes = useStyles();

    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);
    
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng })
    }

    return (
        <div position='static' className='header' >
            <Toolbar className='toolbar'>
                <h2 className='title'>
                    BLANCO<strong>VIAJES</strong>
                </h2>
                <Box display='flex' textAlign='center' >
                    <h3>Dónde deseas explorar?</h3>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Lugar' classes={{ root: classes.inputInput }} className='search-input' />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </div>
    );
}

export default Header;