import React, { useState, useEffect } from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import formatLatLng from "./formatLatLng";

function MyDraw(props) {
  const [mapLayers, setMapLayers] = useState([]);

  const _onEditPath = (e) => {
    const { layerType, layer } = e;
    if (layerType == "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latLngs: layer.getLatLngs()[0] },
      ]);
    }
  };
  const _onCreate = (e) => {
    setMapLayers([]);
    const { layerType, layer } = e;
    if (layerType == "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latLngs: layer.getLatLngs()[0] },
      ]);
    }
  };

  const _onDeleted = (e) => {
    setMapLayers([]);
  };
  useEffect(() => {
    mapLayers &&
      props.setPolygon(formatLatLng({ value: mapLayers[0]?.latLngs }));
  }, [mapLayers]);

  return (
    <FeatureGroup>
      <EditControl
        onEdited={_onEditPath}
        onCreated={_onCreate}
        onDeleted={_onDeleted}
        draw={{
          circlemarker: false,
          marker: false,
          circle: false,
          polyline: false,
          rectangle: false,
        }}
      />
    </FeatureGroup>
  );
}

export default MyDraw;
