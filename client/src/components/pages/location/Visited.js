import React from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import { Button, InputGroup, InputGroupAddon, InputGroupText } from "shards-react";

const Visited = (props) => {
    return (
        <Nav>
            <NavItem className="ml-auto">
                <NavLink>
                    <InputGroup>

                    <InputGroupAddon type="prepend">
                            <InputGroupText>{props.visited.length}</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupAddon type="append">
                            <Button>Visited</Button>
                        </InputGroupAddon>
                        

                    </InputGroup>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default Visited;