import React, { useState } from 'react';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from "shards-react";
import { Button, InputGroup, InputGroupAddon, InputGroupText } from "shards-react";
import { addVisited } from '../../../services/visited';

const Visited = (props) => {

    var username = null;

    // Decode username from token
    if (props.token) {
        username = decode(props.token);
    }

    // Check if username has visited current location
    const checkVisited = () => { 
        if (!props.token) {
            return true;
        }

        for (let i = 0; i < visited.length; i++ ) {
            if (visited[i].username === username.username) {
                return true;
            }
        }
    
        return false;
    }

    const [visited, setVisited] = useState(props.visited);
    const [active, setActive] = useState(checkVisited());

    // On click, add username to visited list
    // Update visited count and disable button
    const onClick = async (id, token) => {
        await addVisited(id, token);
        setVisited(visited.push(username));
        setActive(true);
    }

    return (
        <Nav>
            <NavItem className="ml-auto">
                <NavLink>
                    <InputGroup>

                    <InputGroupAddon type="prepend">
                            <InputGroupText>{props.visited.length}</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupAddon type="append">
                            <Button onClick={() => onClick(props.id, props.token)} disabled={active}>
                                Visited
                            </Button>
                        </InputGroupAddon>    

                    </InputGroup>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect (mapStateToProps) (Visited);