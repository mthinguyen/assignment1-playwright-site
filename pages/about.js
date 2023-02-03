import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Link from 'next/Link';
import Router, { useRouter } from "next/router";
import { NavBar } from "../components/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function About() {

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="viewport" property="og:title" content="Assignment #1 - About Us Page" />
        <meta name="program" property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.mainAbout}>
        <div className={styles.header}>
          <NavBar></NavBar>
        </div>

        <div className={styles.aboutChunk}>
          {/* Info Area */}
          <div className={styles.aboutInfo}>

            <div className={styles.about}><h1 className={styles.aboutTitle}>About Us</h1></div>

            {/* paragraphs and small titles */}
            <div className={styles.para}>
              <p>We are proud to deliver an education that goes beyond textbooks and classrooms. </p>
              <p>Our students gain the technical skills, real-world experience, and problem-solving ability
                needed to embrace complexity and lead innovation in a rapidly changing workforce. </p>
              <p>Through close collaboration with industry, our network of alumni and partners continue
                to achieve global success. </p>

              <h2>Information Sessions</h2>
              <p>Information Sessions are a simple way to learn more about a program, related careers,
                and to get your questions answered by faculty and staff. Learn more about upcoming
                sessions below.</p>

              <h3>Big Info</h3>
              <p>Big Info is the largest program expo and information session at BCIT. It	&#39;s your chance
                to find out about all our programs &#8211; from business, computing, and health to engineering,
                trades, and applied sciences. </p>
              <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023. </p>

              <h2>Campus Tours</h2>
              <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and
                get a tst of campus life. </p>
            </div>
            {/* End of paragraph and small titles */}

          </div>
          {/* End of Info area */}


          <div>

            {/* Department title and list */}
            <div className={styles.departments}>
              <h1 className={styles.departmentsTitle}>Departments</h1>
            </div>

            {/* deparments */}
            <div className={styles.list}>
              <ul className={styles.deparmentsList}>
                <li>Applied & Natural sciences </li>
                <li>Computing & IT </li>
                <li>Engineering </li>
                <li>Health Sciences </li>
                <li>Trades & Apprenticeships</li>
              </ul>
            </div>

          </div>
          {/* End of department list area */}


        </div>
        {/* end of everything chunk */}


        {/* The Arrows */}
        <div className={styles.arrow}>
          <a href="http://localhost:3000">
            <span>
              <img src="/icons/upwardArrow.png" width="40rem" />
            </span>
          </a>

          <a href="http://localhost:3000/contact">
            <span>
              <img src="/icons/downwardArrow.png" width="40rem" />
            </span>
          </a>
        </div>
        {/* End of arrows */}


      </main>
    </>
  )
}
