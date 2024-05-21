import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import Men from "../Men";
import Women from "../Women";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Cart from "../Cart";
import "../Navigation/Navigation.css";
import { Navbar, FormControl } from "react-bootstrap";
import { CartState } from "../../context/Context";
import styled from "styled-components";

const Navigation = () => {
  const { productDispatch } = CartState();

  return (
    <>
      <Nav>
        <div className="img">
          <img
            className="logo"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg"
            }
            alt="logo"
          />
        </div>
        <div className="midnav">
          <div>
            <Link className="link home" to="/">
              HOME
            </Link>
          </div>
          <div>
            <Link className="link" to="/Men">
              MEN
            </Link>
          </div>
          <div>
            <Link className="link" to="/Women">
              WOMEN
            </Link>
          </div>
          <div>
            <Link className="link contact" to="/Contact">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="btn">
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 200 }}
              type="search"
              placeholder="Search"
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
          <button className="login">
            <Link className="link" to="/Login">
              LOGIN
            </Link>
          </button>
          <button className="cart">
            <Link className="link" to="/Cart">
              CART
            </Link>
          </button>
        </div>
      </Nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Men" element={<Men></Men>}></Route>
        <Route path="/Women" element={<Women></Women>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
`;
