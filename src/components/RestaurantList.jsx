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
const RestaurantList = () => {
  const [selectedColor, setSelectedColor] = React.useState("default");

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <Table
        color={selectedColor}
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader
          className="flex justify-center text-center items-center "
          color={selectedColor}
        >
          <TableColumn className="text-center">Restaurant</TableColumn>
          <TableColumn className="text-center">Location</TableColumn>
          <TableColumn className="text-center">Price Range</TableColumn>
          <TableColumn className="text-center">Ratings</TableColumn>
          <TableColumn className="text-center">Edit</TableColumn>
          <TableColumn className="text-center">Delete</TableColumn>
        </TableHeader>
        <TableBody className="flex justify-center items-center">
          <TableRow>
            <TableCell>McDonalds</TableCell>
            <TableCell>Tampa, FL</TableCell>
            <TableCell>$$</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
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
          <Radio key={color} color={color} value={color} className="capitalize">
            {color}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RestaurantList;
