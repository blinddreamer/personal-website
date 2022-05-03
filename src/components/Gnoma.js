import React, { useState, useEffect } from "react";
  
function Gnoma() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        Title: "python",
        Text1: "python",
        Text2: "python",
        github: "python",
        docker: "python",
        twitter: "python",
        email: "python",
    });
  
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    name: data.Title,
                    Text1: data.Text1,
                    Text2: data.Text2,
                    github: data.github,
                    docker: data.docker,
                    twitter: data.twitter,
                    email: data.email,
                });
            })
        );
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h1>GNOMA AND API</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.Title}</p>
                <p>{data.Text1}</p>
                <p>{data.Text2}</p>
                <p>{data.github}</p>
                <p>{data.docker}</p>
                <p>{data.twitter}</p>
                <p>{data.email}</p>
  
            </header>
        </div>
    );
}
  
export default Gnoma;