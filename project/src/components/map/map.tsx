import leaflet, {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Offers} from '../../types/offer';
import {URL_MARKER_DEFAULT} from './const';
import useMap from '../../hooks/useMap';

type MapProps = {
  offers: Offers;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map(props: MapProps): JSX.Element {
  const {offers} = props;
  const city = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
