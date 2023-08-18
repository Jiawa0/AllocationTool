import { useRef, useEffect } from 'react';

/**
 * 將自定義事件綁在指定元素上
 * @param {string} name 自定義事件名稱
 * @param {*} callback
 * @returns
 */
export const useEvent = (name = 'eventName', callback = (e) => any) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.addEventListener(name, callback);

    return () => ref.current?.removeEventListener(name, callback);
  }, [ref.current, name, callback]);

  return [ref, () => ref.current?.dispatchEvent(new Event(name))];
};
