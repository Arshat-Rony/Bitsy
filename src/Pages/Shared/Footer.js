import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
import img from '../../assests/Images/logo/bits-logo (1).png'
const date = new Date()

const Footer = () => {
    return (
        <div className='p-10 lg:px-20  bg-secondary font-primary mt-40'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img width="100px" src={img} alt="logo" />
                    <h2 className='font-3xl font-bold'>Bits</h2>
                </div>
                <div className='flex gap-2 lg:gap-4 lg:pr-20'>
                    <span className='transition ease-in-out delay-150 text-2xl border-2 border-neutral p-1 hover:bg-red-200 duration-300'><AiFillFacebook className='text-accent' /></span>
                    <span className='transition ease-in-out delay-150 text-2xl border-2 border-neutral p-1 hover:bg-red-200 duration-300'><AiFillLinkedin className='text-accent' /></span>
                    <span className='transition ease-in-out delay-150 text-2xl border-2 border-neutral p-1 hover:bg-red-200 duration-300'><AiFillTwitterSquare className='text-accent' /></span>
                    <span className='transition ease-in-out delay-150 text-2xl border-2 border-neutral p-1 hover:bg-red-200 duration-300'><AiFillInstagram className='text-accent' /></span>
                </div>
            </div>

            <footer className="footer  text-base-content border-t-2 border-dashed border-slate-400 py-16 border-b-2">
                <div className='flex items-center justify-center'>

                    <p>There are many variations of passages of but the majority have <br /> suffered alterations cted humour, or randomsed words <br /> which htly believable. If you are going</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <p className='text-center my-4'>{'\u00a9'} {date.getFullYear()} copyright restricted By Bits</p>
        </div>
    );
};

export default Footer;