/* eslint-disable @typescript-eslint/no-unused-vars */
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect, useMemo} from 'react';
import {Offer, Offers} from '../../types/offer';
import {MapType} from '../../const';
import {MarkerIconUrl} from './const';
import useMap from '../../hooks/useMap';

const CITY_ZOOM = 13;

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
      const {location: {latitude, longitude}} = city;
      map.flyTo([latitude, longitude], CITY_ZOOM, {
        animate: true,
        duration: 1.5,
      });
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
    <section className={`map ${isCitiesMap ? 'cities__map' : ''} ${isPropertyMap ? 'property__map' : ''}`} ref={mapRef}></section>
  );
}

export default Map;
