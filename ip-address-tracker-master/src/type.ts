enum SearchType {
  IP = 'ipAddress',
  DOMAIN = 'domain',
}
type ResultType = {
  ip: string;
  isp: string;
  timezone: string;
  location: string;
};

type LngLatType = {
  lng: number;
  lat: number;
} | null;
export { SearchType, ResultType, LngLatType };
