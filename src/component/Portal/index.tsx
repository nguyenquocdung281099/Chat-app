import React from "react";
import { createPortal } from "react-dom";
interface TPortalProps {
  container?: Element;
}
const Portal: React.FC<TPortalProps> = ({ children, container = document.body }): React.ReactPortal =>
  createPortal(children, container);
export default Portal;
