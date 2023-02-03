import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Link from 'next/Link';
import Router, { useRouter } from "next/router";
import { NavBar } from "../components/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="viewport" property="og:title" content="Assignment #1 - Home Page" />
        <meta name="program" property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          {/* <img src="/icons/menu-icon.png" width="60pt"></img> */}
          <NavBar></NavBar>
        </div>

        {/* Text area */}
        <div className={styles.homeChunk}>
          <div className={styles.homeInfo}>
            <div className={styles.homeText}>
              <h1>An investment in knowledge pays the best interest.</h1>
              <hr />
              <p>Different than a college or university, the British Columbia Institute of Technology offers
                practical, flexible, applied education with instructors who have direct, hands-on experience
                in their field.</p>

              {/* The buttons */}
              <div className={styles.buttons}>
                <a href="http://localhost:3000/about">
                  <button type="button">More About Us</button>
                </a>
                <a href="http://localhost:3000/contact">
                  <button type="button">Contact Us</button>
                </a>
              </div>
              {/* End of buttons */}

            </div>
          </div>
        </div>
        {/* End of text area */}


        {/* The arrow to about us page */}
        <div className={styles.arrow}>
          <a href="http://localhost:3000/about">
            <span>
              <img src="/icons/downwardArrow.png" width="40rem" />
            </span>
          </a>
        </div>
        {/* End of arrow */}

      </main>
    </>
  )
}
