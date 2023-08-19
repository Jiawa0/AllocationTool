import React, { useState, useEffect } from 'react';
import * as $ from './$MainPage';
import CustomInputNumber from 'src/components/customInputNumber';
import RoomAllocation from 'src/components/roomAllocation';

const MainPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <$.PageWrapper>
      {/* <CustomInputNumber
        min={1}
        max={20}
        step={2}
        name={'inputName'}
        value={5}
        disabled={false}
        onChange={(event) => {
          console.log(event.target.value, '=====', event.target.name);
        }}
        onBlur={(event) => {
          console.log(event.target.value);
        }}
      /> */}
      <RoomAllocation
        guest={10}
        room={3}
        onChange={(result) => console.log('RoomAllocation Restul => ', result)}
      />
    </$.PageWrapper>
  );
};

export default MainPage;
