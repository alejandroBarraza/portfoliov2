import React from 'react';
import { List, ListItemButton, ListItemText, Collapse, ListItem } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { stackTech } from './ListItem';
import { cyan } from '@mui/material/colors';
export const TechList = () => {
    const [open, setOpen] = React.useState({});
    const handleClick = (index) => {
        setOpen({
            ...open,
            [index]: !open[index],
        });
    };

    return (
        <List>
            {stackTech.map((stack, index) =>
                stack.subtitle ? (
                    <React.Fragment key={stack.id}>
                        <ListItemButton dense onClick={() => handleClick(index)}>
                            <ListItemText primary={stack.title} sx={{ color: '#8892b0' }} />
                            {open[index] ? (
                                <ExpandLess sx={{ color: cyan[500] }} />
                            ) : (
                                <ExpandMore sx={{ color: cyan[500] }} />
                            )}
                        </ListItemButton>
                        <Collapse in={open[index]} timeout='auto' unmountOnExit>
                            {stack.subtitle.map((lenguage) => (
                                <ListItem dense component='div' key={lenguage} sx={{ pl: 4 }}>
                                    <ListItemText primary={lenguage} sx={{ color: cyan[500] }} />
                                </ListItem>
                            ))}
                        </Collapse>
                    </React.Fragment>
                ) : (
                    <ListItem dense key={stack.id}>
                        <ListItemText primary={stack.title} sx={{ color: '#8892b0' }} />
                    </ListItem>
                )
            )}
        </List>
    );
};
