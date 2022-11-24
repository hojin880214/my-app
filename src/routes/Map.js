import {Map as OlMap, View} from "ol";
import {useEffect, useState} from "react";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import { fromLonLat, get as getProjection } from 'ol/proj'; //위경도

export default function Map() {
    const [mapObject, setMapObject] = useState({});
    useEffect(() => {
        const map = new OlMap({
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            target: 'map',
            view: new View({
                projection: getProjection('EPSG:3857'),
                center: fromLonLat([126.752, 37.4713], getProjection('EPSG:3857')),
                zoom: 13
            })
        })
        setMapObject({ map })
        return ()=> null
    }, [])
    return (
        <div id="map" value={mapObject} style={{height:'50rem'}}>
        </div>
    );
}