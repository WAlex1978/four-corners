import React from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import { Button, InputGroup, InputGroupAddon, InputGroupText } from "shards-react";

const Visited = () => {
    return (
        <Nav>
            <NavItem className="ml-auto">
                <NavLink>
                    <InputGroup>

                    <InputGroupAddon type="prepend">
                            <InputGroupText>0</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupAddon type="append">
                            <Button theme="secondary">Visited</Button>
                        </InputGroupAddon>
                        

                    </InputGroup>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default Visited;