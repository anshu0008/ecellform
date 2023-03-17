import React from 'react'
import './Footer.css'
export default function Footer(props) {
  return (
    <div className={props.darkMode ?"footer": "footer1"}>
      <div className={props.darkMode ?"copyright": "copyright1"}>
        &copy; Copyright <strong><span>Ecell VSSUT</span></strong>. All Rights Reserved
      </div>
    </div>
  )
}
