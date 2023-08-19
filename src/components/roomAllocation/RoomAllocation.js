import React, { useEffect, useState } from 'react';
import { useEvent } from 'src/hooks/useEvent';
import * as $ from './$RoomAllocation';
import CustomInputNumber from 'src/components/customInputNumber';

const fiexdStep = 1;

const roomMax = 4;

/** 選項組成 */
const composition = [
  {
    key: 'adult',
    label: '大人',
    note: '年齡 20+',
    defaultValue: 1,
    min: 1
  },
  {
    key: 'child',
    label: '小孩',
    note: '',
    defaultValue: 0,
    min: 0
  }
];

/** 計算房間人數 */
const calcRoomGuestNum = (guestObj) => {
  if (!guestObj) return 0;
  return Object.values(guestObj).reduce((acc, crr) => {
    acc += +crr;
    return acc;
  }, 0);
};

/**
 *  guest >= room
 *  房間固定 4 人房
 *  if guest === room disable all counter
 */
const RoomAllocation = ({
  guest = 1,
  room = 1,
  onChange = (result) => {
    console.log(result);
  },
  ...props
}) => {
  const [remainingGuest, setRemainingGuest] = useState(0);
  const [roomComposition, setRoomComposition] = useState([]);
  const [ref, tirggerChangeEvent] = useEvent('compositionChange', () => {
    if (onChange) onChange(roomComposition);
  });

  useEffect(() => {
    if (roomComposition.length) tirggerChangeEvent();
  }, [roomComposition]);

  // 設置基礎組成
  useEffect(() => {
    const result = Array(room).fill(
      composition.reduce((acc, crr) => {
        acc[crr.key] = +crr.defaultValue;
        return acc;
      }, {})
    );
    setRoomComposition(result);
  }, [room]);

  // 計算剩餘人數
  useEffect(() => {
    const calcReminingGust = () => {
      const remining =
        guest -
        roomComposition.reduce((arr, room, roomIndex) => {
          const num = calcRoomGuestNum(roomComposition[roomIndex]);
          arr += num;
          return arr;
        }, 0);
      setRemainingGuest(remining);
    };

    calcReminingGust();
  }, [roomComposition, guest]);

  /** 處理房間人數改動 */
  const handleRoomGuestChange = (roomIndex) => (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setRoomComposition((prev) => {
      const newRoomComposition = prev.map((room, index) => {
        return index === roomIndex
          ? {
              ...room,
              [key]: +value
            }
          : room;
      });
      return newRoomComposition;
    });
  };

  /** 計算可選最大人數 */
  const calcInputMaxRemaining = (roomIndex, key) => {
    const selectedNum = roomComposition?.[roomIndex]?.[key];
    const roomRemaining =
      roomMax - calcRoomGuestNum(roomComposition[roomIndex]) + selectedNum;
    return remainingGuest + selectedNum < roomRemaining
      ? remainingGuest + selectedNum
      : roomRemaining;
  };

  return (
    <$.Wrapper ref={ref}>
      <$.Label>
        住客人數: {guest} 人 / {room} 房
      </$.Label>
      <$.RemainSection>尚未分配人數 {remainingGuest} 人</$.RemainSection>
      <div>
        {room &&
          Array(room)
            .fill(composition)
            .map((guestTypeList, roomIndex) => (
              <$.Room key={roomIndex}>
                <$.Label>
                  房間 {calcRoomGuestNum(roomComposition[roomIndex])} 人
                </$.Label>
                {guestTypeList.map((guestType) => (
                  <$.CounterBlock key={guestType.key}>
                    <div>
                      <div>{guestType.label}</div>
                      <$.NoteText>{guestType.note}</$.NoteText>
                    </div>
                    <CustomInputNumber
                      min={guestType.min}
                      max={calcInputMaxRemaining(roomIndex, guestType.key)}
                      value={guestType.defaultValue}
                      step={fiexdStep}
                      name={guestType.key}
                      disabled={guest === room}
                      onChange={handleRoomGuestChange(roomIndex)}
                    />
                  </$.CounterBlock>
                ))}
              </$.Room>
            ))}
      </div>
    </$.Wrapper>
  );
};

export default RoomAllocation;
