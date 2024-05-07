export default function About() {
  return (
    <div className="mt-16  flex justify-center items-center">
      <div className=" p-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
          About This Weather App
        </h1>
        <p className="text-lg text-gray-700">
          Get the latest weather updates, including temperature, humidity, wind
          speed, and other essential weather information.
        </p>
        <p className="text-lg mb-6 text-gray-700">
          This weather app provides up-to-date weather information for various
          cities around the world. It uses a third-party weather API to fetch
          data such as temperature, weather conditions, humidity, wind speed,
          and more.
        </p>
        <p className="text-lg text-gray-700">
          Built using Next.js and TypeScript, the app offers a fast and
          efficient user experience. The user interface is designed to be simple
          and easy to navigate.
        </p>
      </div>
    </div>
  );
}
