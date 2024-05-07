import React from "react";

export function Weather({ data }: { data: WeatherData }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
      <div className="flex justify-center items-center gap-10 mb-6">
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="w-24 h-24"
          />
          <p className="font-semibold text-lg mt-2">{data.weather[0].main}</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">
            {data.main.temp.toFixed(0)}&#176;
          </p>
          <p className="text-sm text-gray-500">
            Feels like: {data.main.feels_like.toFixed(0)}&#176;
          </p>
        </div>
      </div>
      <div className="text-center font-mono font-semibold">
        <p className="text-xl font-bold font-serif">Weather in {data.name}</p>
        <p className="mt-2">Humidity: {data.main.humidity}%</p>
        <p className="mt-2">Wind Speed: {data.wind.speed.toFixed(0)} MPH</p>
      </div>
    </div>
  );
}

interface WeatherData {
  weather: {
    icon: string;
    [key: string]: any;
  }[];
  [key: string]: any;
}
