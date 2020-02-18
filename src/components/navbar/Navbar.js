import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartState } from "../../global-state";
import logo from "../../img/logo2.png";

export default function CartNumber() {
  const { cartState } = useCartState();
  const { cart } = cartState;
  let content;
  content =
    cart.length > 0 ? (
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
          <Link to='/cart' className='ml-auto'>
            <Button>
              <span className='mr-1'>
                <i className='fas fa-cart-plus' />
              </span>
              <span className='ml-1 badge badge-warning'>{cart.length}</span>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    ) : (
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
          <Link to='/cart' className='ml-auto'>
            <Button>
              <span className='mr-1'>
                <i className='fas fa-cart-plus' />
              </span>
              <span className='ml-1 badge badge-warning'>0</span>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  return content;
}
