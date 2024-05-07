"use client";
import { Loader } from "@/components/Loader";
import { Weather } from "@/components/Weather";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("hyderabad");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const fetchWeather = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className="text-4xl font-mono font-bold">Weather App</h1>
      <div className="flex justify-center items-center pt-24">
        <div className=" min-h-24 p-5 shadow-lg flex justify-center items-center">
          <form onSubmit={fetchWeather} className="flex space-x-4">
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Check Weather
            </button>
          </form>
        </div>
      </div>
      {loading && (
        <div className=" mt-16 max-w-64 flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="flex justify-center items-center pt-24">
        {weather && <Weather data={weather} />}
      </div>
    </div>
  );
}
