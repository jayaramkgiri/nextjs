'use client';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 8,
      borderColor: 'rgb(229 231 235 / var(--tw-border-opacity))',
    },
  },
}));

export default function Sort() {
  const handleChange = (event: { target: { value: string } }) => {};
  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value="10"
      onChange={handleChange}
      input={<BootstrapInput />}
    >
      <MenuItem value={10}>Buy Volume</MenuItem>
      <MenuItem value={20}>Buy Yield</MenuItem>
      <MenuItem value={30}>Sell Volume</MenuItem>
      <MenuItem value={30}>Sell Yield</MenuItem>
    </Select>
  );
}
