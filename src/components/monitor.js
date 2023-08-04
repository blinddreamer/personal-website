import React, { useEffect, useState } from 'react';
import Footer from "../components/footer"
import video from '../assets/bg.mp4';

const Monitor = () => {
  const [Monitors, setMonitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMonitorsData = () => {
    fetch("https://apiuptime.lab.huku.rocks/api/monitors")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched Data:", data);
        if (data && data.length > 0 && Array.isArray(data[0])) {
          setMonitors(data[0]);
        } else {
          setMonitors([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Fetch Error:", error);
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMonitorsData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div id="dots"></div>
      <video id="video" autoPlay playsInline={true} disablePictureInPicture={true} muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div id="box-div">

        <table id="monitor">
          <thead>
            <tr>
              <th id="monitorth">Name</th>
              <th id="monitorth">Status</th>
              <th id="monitorth">Uptime</th>
            </tr>
          </thead>
          <tbody>
            {Monitors.length > 0 ? (
              Monitors.map((monitor) => (
                <tr key={monitor.ID}>
                  <td id="monitortd">{monitor.Name}</td>
                  <td id="monitortd">{monitor.Uptime_Status}</td>
                  <td id="monitortd">{monitor.Uptime_Stats?.Total?.Uptime || 'N/A'}%</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data found. Check the console for Monitors data.</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
      <Footer />
    </>
  );
};

export default Monitor;