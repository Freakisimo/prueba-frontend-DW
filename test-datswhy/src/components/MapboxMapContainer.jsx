import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

export const MapboxMapContainer = () => {

    const DivMap = useRef()
    const [ mapCreated, setMapCreated] = useState(false)
    // Create a new marker.
    // const marker = new mapboxgl.Marker()
    // .setLngLat([-98.24064316227171,19.315170141354567])
    // .addTo(map);

    useEffect(() => {
        if(!mapCreated && DivMap.current) {
            console.log('inside if')
            const map = new mapboxgl.Map({
                container: DivMap.current.id, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                
                center: [-98.24,19.31], // starting position [lng, lat]
                zoom: 10, // starting zoom
            });
            const marker = new mapboxgl.Marker({
                color: "##3d2e47",
                draggable: true
                }).setLngLat([-98.24,19.31])
                .addTo(map);

            setMapCreated(true)
        }
        if(mapCreated && DivMap.current){
            const mapCanvas = DivMap.current.querySelectorAll('.mapboxgl-canvas-container');
            const MapControls = DivMap.current.querySelectorAll('.mapboxgl-control-container');
            const canary = DivMap.current.querySelectorAll('.mapboxgl-canary')
            mapCanvas[1].remove()
            MapControls[1].remove()
            canary[1].remove()
        }
    }, [mapCreated]);


//    console.log(mapCreated) 
  return (
    <div style={{height: '100%', width: '100%'}} ref={DivMap} id='MapaId'></div>
  )
}
