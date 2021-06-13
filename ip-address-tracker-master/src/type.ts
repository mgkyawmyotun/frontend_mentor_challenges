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

export { SearchType, ResultType };
