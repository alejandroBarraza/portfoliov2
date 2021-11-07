import React from 'react';
import { Card, CardMedia } from '@mui/material';

const styles = {
    cardContainer: {
        width: 200,
        height: 200,
        display: 'flex',
        ml: { xs: 0, md: 8 },
        mt: { xs: 2, md: 8 },
        '& .MuiPaper-root': {},
    },

    profileImage: {
        filter: 'brightness(40%)',
        transition: 'filter 0.5s ease-in-out',
        '&:hover': {
            filter: 'none',
        },
    },
};
export const Picture = () => {
    return (
        <Card sx={styles.cardContainer}>
            <CardMedia
                sx={styles.profileImage}
                component='img'
                alt='profile-pic'
                height='200'
                width='200'
                image='https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg'></CardMedia>
        </Card>
    );
};
