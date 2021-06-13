import type { FC } from 'react';
import React from 'react';

interface SearchBarProps {
  inputRef: React.RefObject<HTMLInputElement>;
  search: () => void;
}
export const SearchBar: FC<SearchBarProps> = ({ inputRef, search }) => {
  return (
    <>
      <div className="main__search_bar">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search();
            }
            return;
          }}
        />
        <button onClick={search}></button>
      </div>
    </>
  );
};
