import React from 'react';
import './styles.css';
import { Box, Typography, Card, Button, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {

    const classes = useStyles();

    const direction = place?.address?.split(' ');
    const directionAddress = direction?.splice(0, (direction?.length - 2));

    if(selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return ( 
        <>
        { place?.name ? (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: '350px'}}
                image={place?.photo ? place?.photo.images.large.url : 'https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg' }
                title={place.name}
            />
            <CardContent className='list-content'>
                <h2>{ place.name }</h2>
            </CardContent>

            { place?.price_level ? (
            <Box className='list-box' display='flex' justifyContent='space-between' alignItems='center'>
                <Rating size='small' value={Number(place?.rating)} readOnly />
                <Typography color='textSecondary' variant='subtitle2'> de { place.num_reviews } valoraciones</Typography>
            </Box>) : null }

            { place?.ranking ? (
            <Box style={{ height: '2rem' }} className='list-box' display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='subtitle2'>Ranking</Typography>
                <Typography color='textSecondary' variant='subtitle2'>{ place.ranking }</Typography>
            </Box>) : null }

            { place?.awards?.map((award) => (
                <Box style={{ height: '2rem' }} className='list-box' display='flex' justifyContent='space-between' alignItems='center'>
                    <img src={award.images.small} alt={award.display_name} style={{ maxHeight: '2rem' }} />
                    <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
                </Box>
            ))}

            <Box className='list-box' display='flex' flexDirection='row' flexWrap='wrap' alignItems='center'>
            {place?.cuisine?.map(({ name }) => (
                <Chip key={name} size='small' label={name} className={classes.chip} />
            ))}
            </Box>

            { place?.address && (
                <Typography gutterButtom variant='subtitle2' color='textSecondary' className={classes.subtitle} >
                    <LocationOnIcon /> {directionAddress?.join(' ')}
                </Typography>
            )}

            { place?.phone && (
                <Typography gutterButtom variant='subtitle2' color='textSecondary' className={classes.subtitle} >
                    <PhoneIcon /> {place?.phone}
                </Typography>
            )}

            <CardActions >
                <Button size='small' onClick={() => window.open(place?.web_url, '_blank')} disabled={!(place?.web_url)}>
                    Trip Advisor
                </Button>
                <Button size='small' onClick={() => window.open(place?.website, '_blank')} disabled={!(place?.websitey)}>
                    Sitio Web
                </Button>
            </CardActions>

        </Card> ) : null 
        }
        </>
    );
}

export default PlaceDetails;