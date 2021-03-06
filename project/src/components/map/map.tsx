import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect, useMemo} from 'react';
import {Offer, Offers} from '../../types/offer';
import {MapType} from '../../const';
import {MarkerIconUrl} from './const';
import useMap from '../../hooks/use-map/use-map';

type MapProps = {
  offers: Offers;
  mapType: string;
  selectedPoint?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIconUrl.URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerIconUrl.URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map(props: MapProps): JSX.Element {
  const {offers, mapType, selectedPoint} = props;
  const city = useMemo(() => offers[0], [offers]);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const isCitiesMap = mapType === MapType.City;
  const isPropertyMap = mapType === MapType.Property;

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(selectedPoint !== undefined && offer.id === selectedPoint.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);

      });
    }
  }, [map, city, offers, selectedPoint]);

  return (
    <section className={`map ${isCitiesMap ? 'cities__map' : ''} ${isPropertyMap ? 'property__map' : ''}`} ref={mapRef} data-testid="map"></section>
  );
}

export default Map;
