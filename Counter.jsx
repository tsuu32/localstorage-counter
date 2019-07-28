import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@blueprintjs/core";

export default function Counter(props) {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));
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
    <Button intent="primary" large={true} onClick={incCount} onContextMenu={cmHandler}>{count}</Button>
  );
}
