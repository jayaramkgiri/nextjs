'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button, { ButtonProps } from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IoFilterOutline } from 'react-icons/io5';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#ced4da'),
  border: '1px solid #ced4da',
  position: 'relative',
  borderRadius: 8,
  fontSize: 16,
  fontFamily: 'inter',
  lineHeight: 1.5,
  width: '120px',
  textTransform: 'none',
  padding: '4px 10px 4px 12px',
  transition: theme.transitions.create(['border-color']),
  '&:hover': {
    borderColor: 'rgb(229 231 235 / var(--tw-border-opacity))',
  },
}));

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <ColorButton
            startIcon={<IoFilterOutline />}
            variant="outlined"
            {...bindTrigger(popupState)}
          >
            Filter
          </ColorButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
