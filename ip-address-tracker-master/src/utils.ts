import { SearchType } from './type';

export const isIpAddress = (data: string) => {
  const res = +data.toString().replaceAll(/\./g, '');
  if (isNaN(res)) return false;
  return true;
};

export const ipGeoLookUp = async (address: string) => {
  const type = isIpAddress(address) ? SearchType.IP : SearchType.DOMAIN;

  try {
    const res = await fetch(
      'https://geo.ipify.org/api/v1?apiKey=at_46Ab3aAzJjotM4I3hNYHnryR3ZChT&' +
        type +
        '=' +
        address,
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
