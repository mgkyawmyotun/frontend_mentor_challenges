import type { FC } from 'react';
import React from 'react';
import type { ResultType } from 'src/type';

interface CardProps {
  result: ResultType | null;
}
export const Card: FC<CardProps> = ({ result }) => {
  return (
    <div className="main__card">
      {' '}
      <div className="main__card__ip">
        <div>Ip Address</div>
        <div>{result?.ip}</div>
      </div>
      <div className="main__card__location">
        <div>Location</div>
        <div>{result?.location}</div>
      </div>
      <div className="main__card__timezone">
        <div>Timezone</div>
        <div>{result?.timezone}</div>
      </div>
      <div className="main__card__isp">
        <div>isp</div>
        <div>{result?.isp}</div>
      </div>
    </div>
  );
};
