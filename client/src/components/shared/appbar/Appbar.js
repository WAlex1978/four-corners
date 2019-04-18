import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'shards-react';
import { Dropdown, DropdownMenu, DropdownItem } from 'shards-react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from '../search/Search';

class Appbar extends Component {
    state = {
        dropdownOpen: false,
    }

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        return (
        <Navbar type="dark" theme="primary" expand="md">
            <NavbarBrand tag={Link} to="/">Four Corners</NavbarBrand>

            <Nav navbar className="ml-auto">
                <Dropdown open={this.state.dropdownOpen} toggle={this.toggleDropdown}>

                    {/* If user is signed in, link to user profile */}
                    {/* Else, display links to login and register pages */}
                    <NavItem onClick={this.props.token ? null : this.toggleDropdown} style={{marginRight: "10px", color: "white", cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faUser} />
                    </NavItem>

                    <DropdownMenu right>
                        <DropdownItem tag={Link} to="login">Log In</DropdownItem>
                        <DropdownItem tag={Link} to="/">Register</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>

            <Nav navbar>
                <Search />
            </Nav>


        </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

export default connect (mapStateToProps) (Appbar);