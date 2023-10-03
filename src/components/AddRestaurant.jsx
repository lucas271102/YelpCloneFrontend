import React from "react";
import {Input} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
const AddRestaurant = () => {
  return (
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
       <Select
      
      label="Price-range"
      placeholder="Select the price-range"
      className="max-w-sm"
    >
      
    </Select>
      </form>
    </div>
  );
};

export default AddRestaurant;
