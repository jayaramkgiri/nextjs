'use client';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { usePathname, useRouter } from 'next/navigation';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
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
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleChange = (event: { target: { value: string } }) => {
    replace(`${pathname}?sortby=${event.target.value}`);
  };
  return (
    <div className="m-0 flex w-1/2 flex-col justify-start gap-1 p-0">
      <InputLabel className="m-0 h-auto p-0 text-xs" id="label">
        Sort
      </InputLabel>
      <Select
        className="m-0 p-0"
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value="sellVolume"
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={'sellVolume'}>Sell Volume</MenuItem>
        <MenuItem value={'sellYield'}>Sell Yield</MenuItem>
        <MenuItem value={'buyVolume'}>Buy Volume</MenuItem>
        <MenuItem value={'buyYield'}>Buy Yield</MenuItem>
      </Select>
    </div>
  );
}
