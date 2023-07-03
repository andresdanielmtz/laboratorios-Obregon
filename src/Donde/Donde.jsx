import "./Donde.css";
import React, { useRef, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import { fromLonLat, transform } from "ol/proj.js";
import "ol/ol.css";

export default function Donde() {
  const mapRef = useRef(null);

  /* coords from google maps to openlayer */
  const coords = [-110.3048252, 30.984385]; // real coordinates
  const real = transform(coords, "EPSG:4326", "EPSG:3857");

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: real,
        zoom: 18,
      }),
    });

    let division = document.createElement("div");
    division.innerHTML =
      '<img click = {console.log(":)} src="https://cdn.discordapp.com/attachments/1011429768740208671/1125557550436331641/pointer.png"/>';

    let jsonOverlay = new Overlay({
      position: real,
      positioning: "center-center",
      element: division,
      stopEvent: true,
    });

    map.addOverlay(jsonOverlay);
  }, []);
  return (
    <div className="donde">
      <h1> Donde estamos</h1>
      <div
        style={{ height: "70%", width: "80%" }}
        id="location-map"
        class = "local-map"
        ref={mapRef}
      ></div>
      <p>
        Avenida Obregón #77, Colonia Centro <br /> <i> Cananea, Sonora </i>
      </p>
    </div>
  );
}
