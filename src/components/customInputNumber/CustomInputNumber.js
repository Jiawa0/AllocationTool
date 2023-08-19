import React, { useState, useEffect, useRef } from 'react';
import * as $ from './$CustomInputNumber';
import { MinusIcon, PlusIcon } from '../icons';
import { useEvent } from 'src/hooks/useEvent';

const defaultValue = 0;

const CustomInputNumber = ({
  min = 1,
  max = 0,
  step = 1,
  name = 'numberInput',
  value = 1,
  disabled = false,
  onChange = (event) => {},
  onBlur = (event) => {}
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [inputRef, triggerInputEvent] = useEvent('chagneValue', (e) => {
    if (onChange) onChange(e);
  });
  const isMounted = useRef(false);
  const intervalRef = useRef(null);
  const minMaxRef = useRef({ min: 0, max: 0 });
  const isDefaultValueSet = useRef(false);

  /** 處理 changeValue 事件觸發 */
  useEffect(() => {
    if (isMounted.current && isDefaultValueSet.current) {
      const { min, max } = minMaxRef.current;
      // 驗證完為最後值才觸發 changeValue
      if (min <= inputValue && (!max || (max > min && max >= inputValue))) {
        triggerInputEvent();
      }
      return;
    }
    isMounted.current = true;
  }, [inputValue]);

  /** 處理預設值 */
  useEffect(() => {
    if (isDefaultValueSet.current) return;
    if (value === inputValue) {
      isDefaultValueSet.current = true;
      return;
    }
    if (value && value !== defaultValue) setInputValue(value);
  }, [value, inputValue]);

  /** 處理 min max 變化 */
  useEffect(() => {
    minMaxRef.current = { min, max };
    setInputValue((prev) => {
      if (prev < min) return min;
      if (max && prev > max) return max;
      return prev;
    });
  }, [min, max]);

  /** 處理長案達到 min max 刪除 interval */
  useEffect(() => {
    if (inputValue <= min || (max && inputValue >= max)) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [min, max, inputValue]);

  /** 處理 input 更動 */
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  /** 處理 input 焦點消失 */
  const handleInputBlur = (e) => {
    let finalValue = e.target.value;
    // 處理 min、max
    if (min > +finalValue) {
      finalValue = min;
    } else if (max && max < +finalValue) {
      finalValue = max;
    }
    setInputValue(+finalValue);

    if (onBlur) {
      e.target.value = finalValue;
      onBlur(e);
    }
  };

  /** 開始計數 */
  const startInvervalCounter = (loopFunction) => (e) => {
    if (!step || intervalRef.current) return;
    loopFunction();
    intervalRef.current = setInterval(() => {
      loopFunction();
    }, 400);
  };

  /** 停止計數 */
  const stopIntervalCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopIntervalCounter();
  }, []);

  /** 增加 */
  const handlePlus = () => {
    if (!step) return;
    if (!max) {
      setInputValue((prev) => prev + step);
      return;
    }
    setInputValue((prev) => {
      if (+prev + step <= max) {
        return +prev + step;
      } else {
        stopIntervalCounter();
        return max;
      }
    });
  };

  /** 減去 */
  const handleMiuns = () => {
    if (!step) return;
    if (!min && min !== 0) {
      setInputValue((prev) => prev - step);
      return;
    }
    setInputValue((prev) => {
      if (+prev - step >= min) {
        return +prev - step;
      } else {
        stopIntervalCounter();
        return min;
      }
    });
  };

  return (
    <$.Wrapper>
      <$.CounterButton
        onMouseDown={startInvervalCounter(handleMiuns)}
        onMouseUp={stopIntervalCounter}
        onMouseLeave={stopIntervalCounter}
        disabled={disabled || +inputValue <= min}
      >
        <MinusIcon />
      </$.CounterButton>
      <$.NumberInput
        name={name}
        ref={inputRef}
        disabled={disabled}
        value={inputValue}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        type="number"
        onWheel={() => document.activeElement.blur()}
        onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
      />
      <$.CounterButton
        onMouseDown={startInvervalCounter(handlePlus)}
        onMouseUp={stopIntervalCounter}
        onMouseLeave={stopIntervalCounter}
        disabled={disabled || +inputValue >= max}
      >
        <PlusIcon />
      </$.CounterButton>
    </$.Wrapper>
  );
};

export default CustomInputNumber;
