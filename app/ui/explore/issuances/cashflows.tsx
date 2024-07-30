
import {
    Card,
    CardHeader,
    CardBody,
} from '@nextui-org/react';

import { FaIndianRupeeSign } from 'react-icons/fa6';
import { Accordion, AccordionItem } from "@nextui-org/react";

export default async function Cashflows() {

    return (
        <Accordion>
            <AccordionItem key="1" aria-label="CASHFLOWS" title="CASHFLOWS">
                <Card className="col-span-1 col-start-3 row-span-2 h-[360px]  overflow-auto rounded-lg bg-gray-200 shadow-lg">
                    <CardHeader className="m-0 flex flex-col gap-0  p-0">
                        <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
                            CASHFLOWS
                        </h3>
                    </CardHeader>
                    <CardBody className="flex h-[312px] flex-col bg-white p-0">
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
                    </CardBody>
                </Card>
            </AccordionItem>
        </Accordion >
    );
}
