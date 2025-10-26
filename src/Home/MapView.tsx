import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const center: LatLngExpression = [48.1486, 17.1077];
  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[48.1486, 17.1077]}>
        <Popup>Bratislava</Popup>
      </Marker>
      <Polyline
        positions={[
          [48.1486, 17.1077],
          [48.15, 17.1],
        ]}
        color="blue"
      />
    </MapContainer>
  );
};

export default MapView;
