import React from 'react';
import * as $ from './$MainPage';
import CustomInputNumber from 'src/components/customInputNumber';

const MainPage = () => {
  return (
    <$.Wrapper>
      <CustomInputNumber
        min={1}
        max={20}
        step={2}
        name={'inputName'}
        value={1}
        disabled={false}
        onChange={(event) => {
          console.log(event.target.value, '=====', event.target.name);
        }}
        onBlur={(event) => {
          console.log(event.target.value);
        }}
      />
    </$.Wrapper>
  );
};

export default MainPage;
