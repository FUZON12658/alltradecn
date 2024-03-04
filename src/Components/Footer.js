import React from 'react';
import { Link } from 'react-router-dom';
import navigationData from '../JsonFiles/navigation.json';

export default function Footer() {
    const { quickLinks, contacts, socialIcons, aboutUs, addressMapSrc } = navigationData;

    return (
        <div className="master_wrapper">
        <div className="bottom_rectangle marginSelectorForProductPage marginSelectorForUserDashboard">
            <div className="forScreenGreaterThanTwelveHundredPixels">
                <div className="headings">
                    <div className="Quick_Links">
                        <h1 className="headingsH1">Quick Links</h1>
                        <div className="Quick_Links_Body">
                            <div className="Quick_Links_List_One">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link className="footerQuickLinkChild" to={link.url}>{link.label}</Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="call_to_action">
                        <h1 className="headingsH1">Contacts</h1>
                        <br />
                        <a href={`tel:${contacts.phoneNumber}`}><button className="for-footer">Call Now</button></a>
                        <a href={`mailto:${contacts.email}`}><button className="for-footer">Email Now</button></a>
                        <br />
                    </div>

                    <div className="aboutUs">
                        <h1 className="headingsH1">About Us</h1>
                        <p className='aboutUsContent'>{aboutUs}</p>
                    </div>

                    <div className="address">
                        <h1 className="headingsH1">Address</h1>
                        <div className="address_footer">
                            <iframe src={addressMapSrc} width="300" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="forScreenLessThanTwelveHundredPixels">
                <div className="headings">
                    <div className="Quick_Links">
                        <h1 className="headingsH1">Quick Links</h1>
                        <div className="Quick_Links_Body">
                            <div className="Quick_Links_List_One">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link className="footerQuickLinkChild" to={link.url}>{link.label}</Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="call_to_action">
                        <h1 className="headingsH1">Contacts</h1>
                        <br />
                        <a href={`tel:${contacts.phoneNumber}`}><button className="for-footer">Call Now</button></a>
                        <a href={`mailto:${contacts.email}`}><button className="for-footer">Email Now</button></a>
                        <br />

                    </div>
                </div>
                <div className="headings">
                    <div className="aboutUs">
                        <h1 className="headingsH1">About Us</h1>
                        <p className='aboutUsContent'>{aboutUs}</p>
                    </div>

                    <div className="address">
                        <h1 className="headingsH1">Address</h1>
                        <div className="address_footer">
                            <iframe src={addressMapSrc} width="300" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
