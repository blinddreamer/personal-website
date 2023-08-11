import React, { useEffect, useState } from "react";
import Animated from "../components/animated";

const Monitor = () => {
  const [Monitors, setMonitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMonitorsData = () => {
    fetch("https://apiuptime.lab.huku.rocks/api/monitors")
      //fetch("http://192.168.250.50:5000/api/monitors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        if (data && data.length > 0 && Array.isArray(data[0])) {
          setMonitors(data[0]);
        } else {
          setMonitors([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
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
      <Animated>
        <main>
          <div className="grid-container">
            <div className="grid-item">Name</div>
            <div className="grid-item">Status</div>
            <div className="grid-item">Uptime</div>
            {Monitors.length > 0 ? (
              Monitors.map((monitor) => (
                <React.Fragment key={monitor.ID}>
                  <div className="grid-item">{monitor.Name}</div>
                  <div className="grid-item">{monitor.Uptime_Status}</div>
                  <div className="grid-item">
                    {monitor.Uptime_Stats?.Total?.Uptime || "N/A"}%
                  </div>
                </React.Fragment>
              ))
            ) : (
              <div className="grid-item" colSpan="3">
                No data found. Check the console for Monitors data.
              </div>
            )}
          </div>
        </main>
      </Animated>
    </>
  );
};

export default Monitor;
