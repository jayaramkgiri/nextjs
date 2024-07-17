import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default async function Page() {
  return (
    <Card className="w-2/3 shadow-lg rounded-lg">
      <CardHeader className="flex gap-3 bg-gray-200">
        <h3 className="m-0 px-3 py-auto flex flex-1  items-center self-stretch text-inherit font-semibold">
          ISSUE DETAILS
        </h3>
      </CardHeader>
      <CardBody className="flex flex-row divide-x divide-gray-200 divide-solid">
        <div className="m-0 "></div>
        <div className="m-0 "></div>
        <div className="m-0 "></div>
        <div className="m-0 "></div>
        <div className="m-0 "></div>
        <div className="m-0 "></div>
      </CardBody>
    </Card >
  );
}
