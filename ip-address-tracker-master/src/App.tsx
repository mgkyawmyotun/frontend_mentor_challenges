import mapBox from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import { Card } from './components/Card';
import { SearchBar } from './components/SearchBar';
import type { ResultType } from './type';
import { ipGeoLookUp } from './utils';
interface AppProps {}
function App({}: AppProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState<ResultType | null>(null);
  const [LngLat, setLngLat] = useState<{ lng: number; lat: number } | null>(
    null,
  );
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
    mapBox.accessToken =
      'pk.eyJ1Ijoia3lhd215b3R1biIsImEiOiJjazV1aWs1ZDUwdGdhM2pwM3RpbXhkdXJ4In0.WFtL4jwTC6eRB2A-dRk99A';
    const map = new mapBox.Map({
      container: mapRef.current as any,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 1,
    });
    if (!LngLat) {
      search();
    }
    if (LngLat?.lat && LngLat.lat) {
      new mapBox.Marker({ color: '#000' })
        .setLngLat([LngLat?.lng, LngLat?.lat])
        .addTo(map);
      map.flyTo({
        center: [LngLat.lng, LngLat.lat],
        zoom: 10,
        essential: true,
      });
    }
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
