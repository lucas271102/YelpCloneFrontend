import React, { useContext } from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
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
import apiUrl from "../api";
import RestaurantsContext from "../context/RestaurantsContext";
const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const RestaurantList = (props) => {
  const {restaurants, setRestaurants}=  useContext(RestaurantsContext)
  const [selectedColor, setSelectedColor] = React.useState("default");
  useEffect(
    ()=>{axios(apiUrl+'api/v1/restaurants')
    .then(res=>setRestaurants((res.data.data.restaurants)))
    .catch(err=>(console.log(err)))},
    []   //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
  )
  

//  const [restaurants, setRestaurants] = useState([])
//useEffect(()=>{
//try {
//  async function getData(){

    //const response = await axios.get(apiUrl + "api/v1/restaurants")
    //console.log(response)
  //}
  //getData()
//} catch (error) {
  
//}
//},[]//CLG
console.log(restaurants)
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
            {restaurants.map(restaurant=>{

            <><TableCell>McDonalds</TableCell>
            <TableCell>Tampa, FL</TableCell>
            <TableCell>$$</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell></>
            })}
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
