export default function Contact() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
        Contact Us
      </h1>
      <p className="text-lg mb-4 text-center text-gray-700">
        We value your feedback and inquiries. If you have any questions,
        suggestions, or concerns, feel free to get in touch with us using the
        contact methods below.
      </p>
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Email</h2>
          <p className="text-lg text-gray-700">koyalkaraditya123@gmail.com</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
            Social Media
          </h2>
          <div className="text-lg flex items-center text-gray-700">
            Follow us on LinkedIn:{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="mr-2"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
