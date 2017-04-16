import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div id="navigation-body">
    <div className="list-title">Makeup</div>
    <input type="checkbox" id="makeup-dropdown" />
    <label htmlFor="makeup-dropdown" id="makeup-dropdown-label">v</label>
    <ul id="makeup">
      <li className="makeup-item">
        <Link className="link" to="/">See all Makeup</Link>
      </li>
      <li className="makeup-item">
        <Link className="link" to="/">Cheek</Link>
      </li>
      <li className="makeup-item">Face
        <ul id="makeup-face">
          <li className="makeup-item">
            <Link className="link" to="/">Countouring</Link>
          </li>
          <li className="makeup-item">
            <Link className="link" to="/">Primer</Link>
          </li>
          <li className="makeup-item">
            <Link className="link" to="/">Tools</Link>
          </li>
          <li className="makeup-item">
            <Link className="link" to="/">Foundation</Link>
          </li>
          <li className="makeup-item">
            <Link className="link" to="/">Cc & Bb Cream</Link>
          </li>
          <li className="makeup-item">
            <Link className="link" to="/">Concealer</Link>
          </li>
        </ul>
      </li>
      <li className="makeup-item">
        <Link className="link" to="/">Eyes</Link>
      </li>
      <li className="makeup-item">
        <Link className="link" to="/">Lips</Link>
      </li>
      <li className="makeup-item">
        <Link className="link" to="/">Nails</Link>
      </li>
    </ul>

    <hr id="list-border" />

    <div className="list-title">Price</div>
    <input type="checkbox" id="price-dropdown" />
    <label htmlFor="price-dropdown" id="price-dropdown-label">v</label>
    <ul id="price">
      <li className="price-item">
        <input type="checkbox" id="under-25" />
        <label htmlFor="under-25">Under $25</label>
      </li>
      <li className="price-item">
        <input type="checkbox" id="25-50" />
        <label htmlFor="25-50">$25 - $50</label>
      </li>
      <li className="price-item">
        <input type="checkbox" id="50-100" />
        <label htmlFor="50-100">$50 - $100</label>
      </li>
      <li className="price-item">
        <input type="checkbox" id="100-150" />
        <label htmlFor="100-150">$100 - $150</label>
      </li>
      <li className="price-item">
        <input type="checkbox" id="150-300" />
        <label htmlFor="150-300">$150 - $300</label>
      </li>
      <li className="price-item">
        <input type="checkbox" id="above-300" />
        <label htmlFor="above-300">Above $300</label>
      </li>
    </ul>
  </div>
);

export default Navbar;
