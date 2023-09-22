import { useState } from "react";
import axios from "axios";
import './Form.css'
// import { useNavigate } from 'react-router-dom';

const Form=(props)=> {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");


  const handleClick = async (e) => {
    e.preventDefault();
    const details = { name, email, whatsappNumber, branch, registrationNumber };
    axios.post('https://form-qohm.onrender.com/api/form', details)
    .then((res) => {
      return res.data
    }).then(data => {
      console.log(data);

    })
    .catch((err) => {
      console.log(err);
    })


    window.location.href='https://ecellvssut.tech/';
  }




  return (
    <div className={props.darkMode ?"body" :" body1"}>
    <div className={props.darkMode ?"container" :" container1"}>
      <div className="title">Registration</div>
      <div className="content">
        <form action="/" method="POST" onSubmit={handleClick} >
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="number"
                placeholder="Enter your number"
                required
                onChange={(e) => {
                  setWhatsappNumber(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Registration Number</span>
              <input
                type="number"
                placeholder="Enter your Registration Number"
                required
                onChange={(e) => {
                  setRegistrationNumber(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Branch</span>
              <input
                type="text"
                placeholder="Enter your Branch"
                required
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register"  />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Form;
