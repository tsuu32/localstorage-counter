import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@blueprintjs/core";
import styled from "styled-components";

export default function Counter(props) {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count"), 10));
  const incCount = useCallback(() => setCount((cnt) => cnt+1), [setCount]);
  const cmHandler = useCallback((ev) => {
    if (props.noContextMenu)
      ev.preventDefault();
    if (props.cheetRightClick)
      incCount();
  }, [props.noContextMenu, props.cheetRightClick]);

  useEffect(() => {
    document.title = `${count}`;
    localStorage.setItem('count', count);
  });

  return (
    <StyledButton
      intent="primary"
      large={true}
      onClick={incCount}
      onContextMenu={cmHandler}
    >
      {count}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  width: 280px;
  height: 280px;
`;
