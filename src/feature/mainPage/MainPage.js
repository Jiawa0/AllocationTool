import React, { useState, useEffect } from 'react';
import * as $ from './$MainPage';
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
      <RoomAllocation
        guest={10}
        room={3}
        onChange={(result) => console.log('RoomAllocation Restul => ', result)}
      />
    </$.PageWrapper>
  );
};

export default MainPage;
