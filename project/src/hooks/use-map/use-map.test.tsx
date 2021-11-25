import { renderHook } from '@testing-library/react-hooks';
import {fakeOffersFromAdapter} from '../../utils/mocks';
import useMap from './use-map';

describe('Hook: useMap', () => {

  it('should return map', () => {
    const mapRef = {current: document.createElement('div')};
    const {result} = renderHook(() =>
      useMap(mapRef, fakeOffersFromAdapter[0]),
    );
    const map = result.current;

    expect(map).not.toBe(null);
    expect(map?.getCenter().lat).toBe(fakeOffersFromAdapter[0].city.location.latitude);
  });

});
