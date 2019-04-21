import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'shards-react';
import { Dropdown, DropdownMenu, DropdownItem } from 'shards-react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import decode from 'jwt-decode';
import Search from '../search/Search';

class Appbar extends Component {
    state = {
        dropdownOpen: false,
    }

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    logOut = () => {
        localStorage.removeItem('user');
        this.props.logOut();

        this.props.history.push('/login');
    }

    render() {
        return (
        <Navbar type="dark" theme="primary" expand="md">
            <NavbarBrand tag={Link} to="/">Four Corners</NavbarBrand>

            <Nav navbar className="ml-auto">
                <Dropdown open={this.state.dropdownOpen} toggle={this.toggleDropdown}>

                    {/* If user is signed in, link to user profile */}
                    {/* Else, display links to login and register pages */}
                    <NavItem onClick={this.toggleDropdown} style={{marginRight: "15px", color: "white", cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faUser} />
                    </NavItem>

                    <DropdownMenu right>
                        {this.props.token ? 
                        <Fragment>
                            <DropdownItem tag={Link} to={"/user/" + decode(this.props.token).username}>My Profile</DropdownItem>
                            <DropdownItem onClick={() => this.logOut()}>Logout</DropdownItem>
                        </Fragment> : 
                        <Fragment>
                            <DropdownItem tag={Link} to="/login">Log In</DropdownItem>
                            <DropdownItem tag={Link} to="/">Register</DropdownItem>
                        </Fragment> }
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

const mapDispatchToProps = (dispatch) => {
    return {logOut: () => { dispatch({ type: "LOG_OUT" }) }}
}

export default withRouter (connect (mapStateToProps, mapDispatchToProps) (Appbar));