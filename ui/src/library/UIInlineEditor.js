import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";

const Editor = styled.input`
  background: inherit;
  color: inherit;
  border: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  border-bottom: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }

  &.no-content {
    outline: none;
    border-bottom: 2px solid darkgrey;
    min-width: 30px;
  }
`;

export const UIInlineEditor = ({
  disabled = false,
  value: initialValue,
  onChange,
}) => {
  const [val, setValue] = useState(initialValue);
  const ref = useRef(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useLayoutEffect(() => {
    const input = ref.current;
    if (input) {
      input.style.width = 0;
      input.style.width = input.scrollWidth + "px";
    }
  }, [ref, val]);

  return (
    <Editor
      ref={ref}
      disabled={disabled}
      className={classNames({ "no-content": val === "" })}
      type="text"
      onChange={(event) => {
        event.stopPropagation();
        event.preventDefault();
        setValue(event.target.value);
      }}
      value={val}
      onKeyDown={({ key }) => {
        if (key === "Enter") {
          ref.current && ref.current.blur();
          onChange(val);
        }
      }}
      onBlur={() => {
        onChange(val);
      }}
    />
  );
};
