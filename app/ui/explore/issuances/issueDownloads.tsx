import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { FileIcon, defaultStyles } from 'react-file-icon';

export default function IssueDownloads() {
  return (
    <Card className="col-span-1 row-span-1 w-1/3 rounded-lg bg-gray-200 shadow-md">
      <CardHeader className="m-0 flex flex-col gap-0 p-0">
        <h3 className="text-sm m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
          DOWNLOADS
        </h3>
      </CardHeader>
      <CardBody className="flex flex-row divide-x divide-solid divide-gray-200 p-0">
        <div className="m-0 flex w-full flex-col justify-between bg-white px-3 pb-2">
          <p className="font-semibold text-darkgray">Information Memorandum</p>
          <div className="flex w-10">
            <FileIcon extension="IM.pdf" {...defaultStyles['pdf']} />
          </div>
        </div>
        <div className="m-0 flex w-full flex-col justify-between  bg-white px-3 pb-2">
          <p className="font-semibold text-darkgray">Rating Rationale</p>
          <div className="flex  w-10">
            <FileIcon extension="RR.pdf" {...defaultStyles['pdf']} />
          </div>
        </div>
        <div className="m-0 flex w-full flex-col justify-between  bg-white px-3 pb-2">
          <p className="font-semibold text-darkgray">Trust Deed</p>
          <div className="flex w-10">-</div>
        </div>
      </CardBody>
    </Card>
  );
}
