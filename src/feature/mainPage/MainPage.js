import React from 'react';
import * as $ from './$MainPage';
import CustomInputNumber from 'src/components/customInputNumber';
import RoomAllocation from 'src/components/roomAllocation';

const MainPage = () => {
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
        guest={7}
        room={3}
        onChange={(result) => console.log(result)}
      />
    </$.PageWrapper>
  );
};

export default MainPage;
