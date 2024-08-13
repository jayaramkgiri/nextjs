'use client';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 12,
    padding: '4px 16px 4px 16px',
    width: '100%',
    fontFamily: "Inter",
    fontWeight: 500,
    transition: theme.transitions.create(['border-color']),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderRadius: 8,
      borderColor: 'rgb(229 231 235 / var(--tw-border-opacity))',
    },
  },
}));

export default function Sort() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterValue, setFilterValue] = useState('all');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const filter = searchParams.get('filter') || 'all';
    setFilterValue(filter);
  }, [searchParams]);

  const handleChange = (event: { target: { value: string } }) => {
    setFilterValue(event.target.value);
    router.push(
      pathname + '?' + createQueryString('filter', event.target.value),
    );
  };

  return (
    <div className="m-0 flex w-1/3 flex-col justify-start gap-1 p-0">
      <InputLabel className="m-0 h-auto p-0 text-xs" id="label">
        Filter By Rating
      </InputLabel>
      <Select
        className="m-0 p-0"
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={filterValue}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }} value={'all'}>All</MenuItem>
        <MenuItem sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }} value={'aaa'}>AAA</MenuItem>
        <MenuItem sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }} value={'aa'}>AA</MenuItem>
        <MenuItem sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }} value={'a'}>A</MenuItem>
        <MenuItem sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }} value={'bbb'}>BBB</MenuItem>
      </Select>
    </div>
  );
}
