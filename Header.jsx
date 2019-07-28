import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Overlay,
  Card,
  Switch
} from "@blueprintjs/core";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <Navbar className="bp3-dark">
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>LocalStorage Counter</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button minimal={true} icon="cog" text="" onClick={open} />
        <Overlay isOpen={isOpen} onClose={close}>
          <Card>
            <Switch checked={props.noContextMenu} label={"Disable right click."}
                    onChange={props.toggleNoContextMenu}/>
            <Switch checked={props.cheetRightClick}
                    labelElement={<span><strong>CHEET</strong> A right click as a click.</span>}
                    onChange={props.toggleCheetRightClick}/>
          </Card>
        </Overlay>
      </NavbarGroup>
    </Navbar>
  );
}
