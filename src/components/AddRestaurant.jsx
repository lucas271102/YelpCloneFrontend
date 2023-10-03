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
     
    </>
  );
};

export default AddRestaurant;
