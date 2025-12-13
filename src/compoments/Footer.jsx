import React from 'react';
import logo from '../../public//logo.png'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=" bg-base-300 text-base-content p-10">
<div className="footer sm:footer-horizontal text-base-content">
    <aside>
    <Link to="/" className=" text-xl">
          <img src={logo} alt="" className="w-22 object-cover" />
        </Link>
    <p>
      Travel Guru
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</div>

  <aside className='sm:footer-horizontal footer-center text-base-content pt-14 text-center text-sm'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Travel Guru</p>
  </aside>
</footer>
    );
};

export default Footer;