import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { cyan } from '@mui/material/colors';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export const Social = () => {
    return (
        <SpeedDial
            FabProps={{
                size: 'small',
                style: { backgroundColor: cyan[500] },
            }}
            ariaLabel='SpeedDial basic example'
            icon={<SpeedDialIcon />}>
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    sx={{ margin: '0 0 8px 0' }}
                />
            ))}
        </SpeedDial>
    );
};
