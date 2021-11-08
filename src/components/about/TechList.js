import React from 'react';
import { List, ListItemButton, ListItemText, Collapse, ListItem } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { stackTech } from './ListItem';
import { cyan, grey } from '@mui/material/colors';
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
                        <ListItemButton onClick={() => handleClick(index)}>
                            <ListItemText primary={stack.title} sx={{ color: grey[600] }} />
                            {open[index] ? (
                                <ExpandLess sx={{ color: cyan[500] }} />
                            ) : (
                                <ExpandMore sx={{ color: cyan[500] }} />
                            )}
                        </ListItemButton>
                        <Collapse in={open[index]} timeout='auto' unmountOnExit>
                            {stack.subtitle.map((lenguage) => (
                                <ListItem component='div' key={lenguage} sx={{ pl: 4 }}>
                                    <ListItemText primary={lenguage} sx={{ color: cyan[500] }} />
                                </ListItem>
                            ))}
                        </Collapse>
                    </React.Fragment>
                ) : (
                    <ListItem key={stack.id}>
                        <ListItemText primary={stack.title} sx={{ color: grey[600] }} />
                    </ListItem>
                )
            )}
        </List>
    );
};
