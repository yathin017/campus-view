import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CampusView = () => {
  return (
    <div className="bg-[#E4F4FA]">
      <div className="mx-10">
        <div className="pt-36 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-2xl font-semibold text-gray-700"
            >
              Select College
            </label>
            <select
              id="college"
              name="college"
              autoComplete="college-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>IIT Bombay</option>
              <option>IIT Madras</option>
              <option>IIT Kharagpur</option>
            </select>
          </div>
        </div>
        <p className="text-2xl font-semibold pt-10">Place1</p>
        <Carousel breakPoints={breakPoints} className="pt-5">
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>

        <p className="text-2xl font-semibold pt-10">Place2</p>
        <Carousel breakPoints={breakPoints} className="pt-5">
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CampusView;
