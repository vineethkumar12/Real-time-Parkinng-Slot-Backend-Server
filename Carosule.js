import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carosule.css";

import { useEffect, useState } from "react";

export const Carosule = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  //const [parkingSlots, setParkingSlots] = useState([{}]);
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:3001");

    newSocket.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
      setSocket(newSocket);
    });

    newSocket.addEventListener("message", (event) => {
      console.log("Received message:", event.data);
      setReceivedMessages([...receivedMessages, event.data]);
    });

    newSocket.addEventListener("close", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      newSocket.close();
    };
  }, [receivedMessages]);

  const parkingSlots = [
    { slotName: "A", isParked: true },
    { slotName: "B", isParked: true },
    { slotName: "C", isParked: true },
    { slotName: "D", isParked: false },
    { slotName: "E", isParked: true },
    { slotName: "F", isParked: false },
    { slotName: "G", isParked: true },
    { slotName: "H", isParked: false },
    { slotName: "I", isParked: true },
    { slotName: "J", isParked: false },
    { slotName: "K", isParked: true },
    { slotName: "L", isParked: false },
    { slotName: "M", isParked: true },
    { slotName: "N", isParked: false },
    { slotName: "O", isParked: true },
  ];

  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 3000,

    slidesToScroll: 1,
  };

  return (
    <div className="carosule">
      <div>
        <h1 style={{ color: "cyan", fontSize: "70px", marginTop: "-60px" }}>
          <strong>Smart Parking System</strong>
        </h1>
      </div>
      <Slider {...settings} style={{ marginTop: "-30px" }}>
        <div>
          <div id="wrapper six ">
            <div className="glow1">
              <div>
                <h1 className="flicker">
                  ▀▄▀▄▀▄ <span style={{ color: "white" }}>BLOCK-1</span> ▄▀▄▀▄▀
                </h1>
              </div>
            </div>
            <div className="glow2">
              <div className="book">
                {parkingSlots.map((value, index) => {
                  return (
                    <div
                      className={`b2 ${value.isParked ? "" : "beat-animation"}`}
                      id={value.slotName}
                      style={{
                        background: value.isParked
                          ? "rgb(255,140,0)"
                          : "rgba(173,248,2,0.4 )",
                        border: value.isParked
                          ? "4px solid rgb(255,140,0)"
                          : "4px solid rgba(173,248,2,1.00)",
                      }}
                      key={index}
                    >
                      {<h1 style={{ color: "white" }}>{value.slotName}</h1>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div id="parent">
            <div className="glow1">
              <div>
                <h1 className="flicker">
                  ▀▄▀▄▀▄{" "}
                  <span style={{ color: "white" }}>
                    <strong>BLOCK-1</strong>
                  </span>{" "}
                  ▄▀▄▀▄▀
                </h1>
              </div>
            </div>
            <div
              className="glow3"
              style={{ width: "850px", margin: "3% auto", marginTop: "-1px" }}
            >
              <div className="child2">
                <table
                  borderColor="orange"
                  style={{
                    width: "300%",
                    height: "400px ",
                    textAlign: "justify",
                  }}
                >
                  <tr style={{ fontSize: "70px" }}>
                    <td style={{ paddingLeft: "65px" }} className="glow1">
                      <strong>Total Slots</strong>{" "}
                    </td>
                    <td className="glow1">
                      <strong>15</strong>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "70px" }} className="glow1">
                    <td style={{ paddingLeft: "65px" }} className="glow1">
                      {" "}
                      <strong> Available Slots</strong>{" "}
                    </td>

                    <td className="glow1">
                      <strong>13</strong>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "70px" }} className="glow1">
                    <td style={{ paddingLeft: "65px" }}>
                      <strong>Parked Slots</strong>{" "}
                    </td>

                    <td className="glow1">
                      <strong>03</strong>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div>
        <h1
          style={{
            color: "rgb(255,140,0)",
            fontSize: "70px",
            marginTop: "-6px",
          }}
        >
          <strong>
            {" "}
            MSME Project by
            <span style={{ color: "cyan" }}> Dr. V. Raju Reddy</span>
          </strong>
        </h1>
      </div>
    </div>
  );
};
