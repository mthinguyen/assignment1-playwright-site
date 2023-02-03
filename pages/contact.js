import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Link from 'next/Link';
import Router, { useRouter } from "next/router";
import { NavBar } from "../components/navbar";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta name="viewport" property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta name="program" property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.mainContact}>

                <div className={styles.header}>
                    <NavBar></NavBar>
                </div>

                {/* The whole thing except nav and arrows */}
                <div className={styles.contactChunk}>

                    {/* Title and paragraph  */}
                    <div className={styles.contactInfo}>
                        <div className={styles.contact}>
                            <h1 className={styles.contactTitle}>Contact Us</h1>
                        </div>
                        <div className={styles.para}>
                            <p>
                                Want to discuss? Lets chat!
                            </p>
                        </div>
                        {/* Title and paragraph ends here */}


                        {/* Form area */}
                        <div className={styles.contactForm}>
                            <form>
                                <fieldset >
                                    <table>
                                        {/* <thead className={styles.fullName}> */}
                                        <thead>
                                            <tr>
                                                <th scope="col">First Name:</th>
                                                <th scope="col">Last Name:</th>
                                            </tr>
                                            <th scope="row"><input type="text" id="firstName" placeholder="First Name Here"></input></th>
                                            <th scope="row"><input type="text" id="lastName" placeholder="Last Name Here"></input></th>

                                        </thead>


                                        {/* <thead className={styles.emailAddress}> */}
                                        <thead>
                                            <tr>
                                                <th scope="col">Email:</th>
                                            </tr>
                                            <th scope="row"> <input type="email" id="email" placeholder="Email Here"></input></th>
                                        </thead>
                                    </table>
                                </fieldset>

                                <div className={styles.buttons}>
                                    <a href="http://localhost:3000">
                                        <button type="button">Submit</button>
                                    </a>
                                </div>

                            </form>
                        </div>
                        {/* Form area ends here */}


                    </div>
                </div>
                {/* The whole thing */}



                {/* The arrow to about us page */}
                <div className={styles.arrow}>
                    <a href="http://localhost:3000/about">
                        <span>
                            <img src="/icons/upwardArrow.png" width="40rem" />
                        </span>
                    </a>
                </div>
                {/* End of arrow */}

            </main>
        </>
    )
}