import React from 'react'
import './About.css'
// import { motion } from "framer-motion";
export default function About(props) {
  return (
    <section className={props.darkMode?'section':'sec'}>
      <div className="text">
      <span>Welcome To</span>
      <h1>Induction 2023</h1>
      <h2>Why to Join</h2>
      <p>"Your most loathed present will someday become the moment that changed you.All you have to do is believe and start working on things that people think are impossible."</p>
      </div>
{/* 
      <div className="anim">
        <a href="#about">
          <div className="a">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="b"
            />
          </div>
        </a>
      </div> */}
    </section>
    
  )
}
