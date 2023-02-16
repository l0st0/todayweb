import React from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  selector: "#topBar-heading";
}

export const Portal = ({
  children,
  selector,
}: React.PropsWithChildren<PortalProps>) => {
  const ref = React.useRef<Element | null>();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (document.querySelector(selector)) {
      ref.current = document.querySelector(selector);
      setMounted(true);
    }
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
