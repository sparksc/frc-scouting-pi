// @flow

import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Grid, Nav, Navbar, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop collapseOnSelect>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Scout FRC</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={{ pathname: '/dashboard' }}>
                  <NavItem eventKey={1}>Dashboard</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/scoutinghome' }}>
                  <NavItem eventKey={2}>Scouting</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/teamviewer' }}>
                  <NavItem eventKey={3}>Team Viewer</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/picklist' }}>
                  <NavItem eventKey={4}>Pick List</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/dataviewer' }}>
                  <NavItem eventKey={5}>Database</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
