import React from "react";
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white  py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora debitis eveniet voluptates obcaecati, iure minima! Fuga quae
            aperiam iste vitae veniam quod labore voluptates tenetur laboriosam.
            Obcaecati, adipisci! Voluptas.
          </p>
          <button className="bg-[#00df9a] w-[200px] font-medium my-6 mx-auto py-3 rounded-md text-black hover:bg-[#01080a] hover:text-[white]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
