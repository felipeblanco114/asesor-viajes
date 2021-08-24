import React, { useState, useEffect, createRef } from 'react';
import './styles.css';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles.js';

const List = ({ places, childClicked, isLoading, type, rating, setType, setRating }) => {
    const classes = useStyles();

    const [ elRefs, setElRefs ] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

        setElRefs(refs);
    }, [places, elRefs])

    return (
        <div className={`${classes.container}`}>
            <h2 className='list-title' >Restaurantes, hoteles y atracciones alrededor tuyo.</h2>
            {isLoading ? 
            (
                <div className={classes.loading}>
                    <CircularProgress size='5rem' />
                </div>
            ) : 
            (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Tipo</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value='restaurants'>Restaurantes</MenuItem>
                            <MenuItem value='hotels'>Hoteles</MenuItem>
                            <MenuItem value='attractions'>Atracciones</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>Todos</MenuItem>
                            <MenuItem value={3}>3 o más</MenuItem>
                            <MenuItem value={4}>4 o más</MenuItem>
                            <MenuItem value={4.5}>4.5 o más</MenuItem>
                        </Select>
                    </FormControl>

                    <Grid container spacing={3} className={classes.list}>
                        { places?.map((place, i) => (
                            <Grid item key={i} xs={12}>
                                <PlaceDetails 
                                    place={place}
                                    selected={Number(childClicked) === i} 
                                    refProp={elRefs[i]}
                                />
                            </Grid>
                        ) )}
                    </Grid>
                </>
            )
            }
        </div>
    );
}

export default List;