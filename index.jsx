import "normalize.css/normalize.css";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Counter from './counter';

function App() {
  const [noContextMenu, setNoContextMenu] = useState(false);
  const [cheetRightClick, setCheetRightClick] = useState(false);
  const toggleNoContextMenu = useCallback(() => setNoContextMenu((prev) => !prev),
                                          [setNoContextMenu]);
  const toggleCheetRightClick = useCallback(() => setCheetRightClick((prev) => !prev),
                                            [setCheetRightClick]);

  return (
    <div>
      <Header noContextMenu={noContextMenu} cheetRightClick={cheetRightClick}
              toggleNoContextMenu={toggleNoContextMenu} toggleCheetRightClick={toggleCheetRightClick}/>
      <Container>
        <Counter noContextMenu={noContextMenu} cheetRightClick={cheetRightClick}/>
      </Container>
    </div>
  );
}

import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  touch-action: manipulation;
`;

ReactDOM.render(<App/>, document.getElementById('app'));
