import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from 'axios';
import '../map.css';

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

function Contact() {
  const mapRef = useRef(null);
  const latitude = 11.117590;
  const longitude = 76.969520;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      alert('Failed to send email error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-100'>
      <section className="py-12">
        <div className="mx-auto max-w-7xl xl:max-w-[95rem] 2xl:max-w-[100rem] 6xl:max-w-[110rem] 7xl:max-w-[114rem] 8xl:max-w-[118rem] 9xl:max-w-[122rem] px-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="flex-1 flex flex-col">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex-grow">
                <h1 className="manrope-regular text-[#0a4275] text-4xl font-bold leading-10 mb-6 poppins-medium">Contact us</h1>
                <div className="space-y-8">
                  <Link to="tel:470-601-1911" className="flex items-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                        stroke="#0a4275"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5 poppins-regular">+91 9486470817</h5>
                  </Link>
                  <Link to="https://veilmail.io/irish-geoff" className="flex items-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                        stroke="#0a4275"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5 poppins-regular">praveenamara@senanitech.com</h5>
                  </Link>
                  <Link to="#" className="flex items-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                        stroke="#0a4275"
                        strokeWidth="2"
                      />
                      <path
                        d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                        stroke="#0a4275"
                        strokeWidth="2"
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5 poppins-regular">Vattamalaipalayam N.G.G.O colony,<br></br> Coimbatore district , Tamilnadu - 641022</h5>
                  </Link>
                </div>
              </div>

              <MapContainer center={[latitude, longitude]} zoom={18} ref={mapRef} className='flex-grow h-64 lg:h-full' id='map'>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} icon={customIcon}>
                  <Popup>
                    SenaniTech
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl shadow-lg flex-1 flex flex-col poppins-regular">
              <h2 className="text-[#0a4275] font-manrope text-4xl font-semibold leading-10 mb-11 poppins-medium">Send Us A Message</h2>
              <input
                type="text"
                name="name"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Phone"
                required
              />
              <div className="flex items-center justify-center w-full pb-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">file: docs,txt,pdf</p>
                  </div>
                  <input id="dropzone-file" type="file" name="file" className="hidden" />
                </label>
              </div>
              <textarea
                name="message"
                className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-[#345a7e] bg-[#0a4275] shadow-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Contact;
