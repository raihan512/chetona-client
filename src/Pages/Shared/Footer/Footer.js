import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterMenu from './FooterMenu/FooterMenu';

const Footer = () => {
    return (
        <footer >
            <FooterMenu></FooterMenu>
            <FooterBottom></FooterBottom>
        </footer>
    );
};

export default Footer;