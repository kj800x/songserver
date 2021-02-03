import React from "react";
import ReactDOM from "react-dom";
import { useKeys } from "./hooks/useKeys";
import styled from "styled-components";

const SidebarOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5) !important;
`;
const Sidebar = styled.div`
  position: fixed;
  width: 600px;
  right: 0;
  top: 0;
  bottom: 0;
  background: black !important;
  border-left: 1px solid white;
  filter: drop-shadow(-20px 0px 20px #333);
  display: flex;
  flex-direction: column;
`;

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("portal-root")
  );
};

export function UISidebar({ className, isOpen, onCloseRequest, children }) {
  useKeys({
    Escape: onCloseRequest,
  });

  return (
    <Modal isOpen={isOpen}>
      <SidebarOverlay className="sidebar--overlay" onClick={onCloseRequest} />
      <Sidebar className={className}>{children}</Sidebar>
    </Modal>
  );
}
