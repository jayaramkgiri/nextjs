
import { FaIndianRupeeSign } from 'react-icons/fa6';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default async function Cashflows() {

    return (
        <div className='w-full'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="cashflows"
                    id="cashflows"
                    className='rounded-t-lg bg-gray-200 shadow-t-lg m-0 text-inherit font-semibold text-neutral-600'
                >
                    CASHFLOWS
                </AccordionSummary>
                <AccordionDetails className='shadow-lg rounded-lg mt-0 pt-0'>
                    <div key="1" className=" h-[360px] overflow-auto ">
                        <div className="flex h-[312px] flex-col bg-white p-0">
                            <div className="m-2 flex h-6 w-full flex-row items-start justify-between text-darkgray">
                                <div className="w-1/4 shrink-0 text-xs font-semibold">Date</div>
                                <div className="w-1/4 shrink-0 text-xs font-semibold">
                                    Principal
                                </div>
                                <div className="w-1/4 shrink-0 text-xs font-semibold">Interest</div>
                                <div className="w-1/4 shrink-0 text-xs font-semibold">Sum</div>
                            </div>
                            {new Array(16).fill('').map((_) => {
                                return (
                                    <div className="m-2 flex h-auto w-full flex-row items-start justify-between self-stretch pr-2">
                                        <div className="relative inline-block w-1/4  shrink-0 self-stretch text-xs">
                                            24 May 2024
                                        </div>
                                        <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-xs">
                                            <div className="flex flex-row items-start justify-start">
                                                <div className="h-auto p-[2px]">
                                                    <FaIndianRupeeSign />
                                                </div>
                                                10,00,000
                                            </div>
                                        </div>
                                        <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-xs ">
                                            <div className="flex flex-row items-start justify-start">
                                                <div className="h-auto p-[2px]">
                                                    <FaIndianRupeeSign />
                                                </div>
                                                1,43,551
                                            </div>
                                        </div>
                                        <div className="flex w-1/4 flex-col items-start justify-start  gap-2 self-stretch text-xs">
                                            <div className="flex flex-row items-start justify-start self-stretch">
                                                <div className="h-auto p-[2px]">
                                                    <FaIndianRupeeSign />
                                                </div>
                                                11,43,551
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div >
    );
}
