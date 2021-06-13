import React, { useEffect, useRef, useState } from 'react';
import { Card } from './components/Card';
import { SearchBar } from './components/SearchBar';
import type { LngLatType, ResultType } from './type';
import { ipGeoLookUp, markAndFlyToLocation, setUpMap } from './utils';
interface AppProps {}
function App({}: AppProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [LngLat, setLngLat] = useState<LngLatType>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const search = async () => {
    setLoading((value) => true);
    const {
      ip,
      isp,
      location: { country, city, lat, lng, timezone },
    }: any = await ipGeoLookUp(inputRef?.current?.value + '');
    setResult({
      ip,
      isp,
      location: country + ' , ' + city,
      timezone,
    });
    setLngLat({ lng, lat });
    setLoading((value) => false);
  };

  useEffect(() => {
    const map = setUpMap(mapRef);
    // check if no location search , search the user own location
    if (!LngLat) {
      search();
    }
    markAndFlyToLocation(LngLat, map);
  }, [LngLat]);
  return (
    <div className={loading ? 'loading' : ''}>
      <div className="main">
        <div className="main__title">IP Address Tracker</div>
        <SearchBar inputRef={inputRef} search={search} />
        <Card result={result} />
        <div className="main__map" ref={mapRef}></div>
      </div>
    </div>
  );
}

export default App;
