import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../img/logo2.png";
import { Link } from "react-router-dom";
import CartNumber from "./CartNumber";

class SiteNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            alt=''
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          &nbsp;&nbsp;Bilgisayar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/product-list'>Products</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
          <CartNumber />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SiteNavbar;
