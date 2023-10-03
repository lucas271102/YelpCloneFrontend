import React from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const AddRestaurant = () => {
  const [selectedColor, setSelectedColor] = React.useState("default");
  return (
    <>
      <div className="bottom-4 flex justify-center items-center">
        <form className="flex gap-5 p-10 flex-col w-[100%] md:flex-row md:w-[75%]">
          <Input
            isRequired
            type="name"
            label="Name"
            defaultValue="Any"
            className="max-w-sm"
          />
          <Input
            isRequired
            type="text"
            label="Location"
            defaultValue="Iowa"
            className="max-w-sm"
          />
          <select className="w-56 h-14 border rounded-2xl border-black">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
          <Button
            color="primary"
            variant="shadow"
            className="h-14 font-semibold text-md rounded-2xl border border-black"
          >
            Add
          </Button>
        </form>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Table
          color={selectedColor}
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader className="flex justify-center text-center items-center">
            <TableColumn className="text-center">Restaurant</TableColumn>
            <TableColumn className="text-center">Location</TableColumn>
            <TableColumn className="text-center">Price Range</TableColumn>
            <TableColumn className="text-center">Ratings</TableColumn>
            <TableColumn className="text-center">Edit</TableColumn>
            <TableColumn className="text-center">Delete</TableColumn>
          </TableHeader>
          <TableBody className="flex justify-center items-center">
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <RadioGroup
          label="Selection color"
          orientation="horizontal"
          value={selectedColor}
          onValueChange={setSelectedColor}
        >
          {colors.map((color) => (
            <Radio
              key={color}
              color={color}
              value={color}
              className="capitalize"
            >
              {color}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default AddRestaurant;
