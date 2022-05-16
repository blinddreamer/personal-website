import React, { useState, useEffect } from "react";
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si"
  
function Gnoma() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        Title: "huku.rocks",
        Text1: "coming soon-ish",
        Text2: "eventually",
        github: "https://github.com/blinddreamer/",
        docker: "https://hub.docker.com/u/blinddreamer",
        twitter: "https://twitter.com/HukuA",
        email: "mailto:blinddreamer@huku.rocks",
        copy: "huku.rocks",
    });
  
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    Title: data.Title,
                    Text1: data.Text1,
                    Text2: data.Text2,
                    github: data.github,
                    docker: data.docker,
                    twitter: data.twitter,
                    email: data.email,
                    copy: data.copy,
                    menu: data.menu,
                });
            })
        );
    }, []);
    return (

            <header className="App-header">

                <div id="box-div">
                    <h1>{data.Title}</h1>
                    <h2>{data.Text1}<br></br>{data.Text2}</h2>
                {/* Calling a data from setdata for showing */}
                </div>
                <div id="footer">
                    <table>
                        <td title="twitter"><a href={data.twitter} title="twitter"><SiTwitter /></a></td>
                        <td title="docker"><a href={data.docker} title="dockerhub"><SiDocker /></a></td>
                        <td title="github"><a href={data.github} title="github"><SiGithub /></a></td>
                        <td title="email"><a href={data.email} title="email"><SiGmail /></a></td>
                    </table>
                    <h3>&copy; {data.copy}</h3>
                </div>     
            </header>
    );
}
  
export default Gnoma;