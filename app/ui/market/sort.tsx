'use client';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 12,
    padding: '4px 16px 4px 16px',
    width: '100%',
    fontFamily: 'Inter',
    fontWeight: 500,
    // Use the system font instead of the default Roboto font.
  },
}));

export default function Sort() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortValue, setSortValue] = useState('sell_volume');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const sort = searchParams.get('sort') || 'sell_volume';
    setSortValue(sort);
  }, [searchParams]);

  const handleChange = (event: { target: { value: string } }) => {
    setSortValue(event.target.value);
    router.push(pathname + '?' + createQueryString('sort', event.target.value));
  };
  return (
    <div className="m-0 flex w-2/5 flex-col justify-start gap-1 p-0 md:w-1/3">
      <InputLabel
        id="label"
        sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 12 }}
      >
        Sort
      </InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={sortValue}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem
          sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 12 }}
          value={'sell_volume'}
        >
          Sell Volume
        </MenuItem>
        <MenuItem
          sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 12 }}
          value={'buy_volume'}
        >
          Buy Volume
        </MenuItem>
      </Select>
    </div>
  );
}
