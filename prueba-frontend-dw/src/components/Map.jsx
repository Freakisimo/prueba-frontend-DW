import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

mapboxgl.accessToken =
  "pk.eyJ1IjoiampnYXJjaWEiLCJhIjoiY2w1eW1wbWpqMTU4dTNpbW92a2VkMjhnOCJ9.W2vkztDqrfTudiUPcBUcGg";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-101.69);
  const [lat, setLat] = useState(21.15);
  const [zoom, setZoom] = useState(10);
  const [point, setPoint] = useState([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("click", (e) => {
      setPoint([e.lngLat.lng.toFixed(4), e.lngLat.lat.toFixed(4)]);
      console.log(point);
      return (new mapboxgl.Marker({ color: "deeppink"})
      .setLngLat([e.lngLat.lng, e.lngLat.lat])
      .addTo(map.current));
    });
  });

  return (
    <div className="map-div">
      <LeftPanel />
      <RightPanel />
      <div className="coord2">
        Longitude Point: {point[0]} | Latitude Point: {point[1]}
      </div>
      <div className="coord1">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
