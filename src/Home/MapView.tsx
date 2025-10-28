import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

type MapViewProps = {
  coordinates: {
    fromLatitude: number;
    fromLongitude: number;
    toLatitude: number;
    toLongitude: number;
  };
};

const MapView = ({ coordinates }: MapViewProps) => {
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
      {coordinates.fromLatitude !== 0 &&
      coordinates.fromLongitude !== 0 &&
      coordinates.toLatitude !== 0 &&
      coordinates.toLongitude !== 0 ? (
        <>
          <Marker
            position={[coordinates.fromLatitude, coordinates.fromLongitude]}
          >
            <Popup>From</Popup>
          </Marker>
          <Marker position={[coordinates.toLatitude, coordinates.toLongitude]}>
            <Popup>To</Popup>
          </Marker>
          <Polyline
            positions={[
              [coordinates.fromLatitude, coordinates.fromLongitude],
              [coordinates.toLatitude, coordinates.toLongitude],
            ]}
            color="blue"
          />
        </>
      ) : null}
    </MapContainer>
  );
};

export default MapView;
