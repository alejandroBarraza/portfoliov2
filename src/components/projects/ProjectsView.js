import { useMediaQuery } from '@mui/material';
import React from 'react';
import { CardProjectDekstop } from './CardProjectDekstop';
import { CardProjectMobile } from './CardProjectMobile';

export const ProjectsView = (props) => {
    const matches = useMediaQuery('(min-width:768px)');
    return matches ? <CardProjectDekstop {...props} /> : <CardProjectMobile {...props} />;
};
