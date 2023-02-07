import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useEventListener } from "./useEventListener";

export interface Size {
  width: number;
  height: number;
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>,
  setContextSize?: Dispatch<SetStateAction<Size>>
): Size {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const updateSize = () => {
    const node = elementRef?.current;

    if (node) {
      if (setContextSize) {
        setContextSize({
          width: node.offsetWidth || 0,
          height: node.offsetHeight || 0,
        });
      }

      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  };

  // Initial size on mount
  useEffect(() => {
    updateSize();
  }, [elementRef?.current]);

  useEventListener("resize", updateSize);

  return size;
}
