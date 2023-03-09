import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [domain, setDomain] = useState("");


  const handlClick = async (e) => {
    e.preventDefault();
    const details = { name, email, whatsappNumber, branch, registrationNumber, domain };
    
    // const response = await fetch('http://localhost:8000/api/form', {
    //   method: 'POST',
    //   body: JSON.stringify(details),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // console.log(response);
    axios.post('http://localhost:8000/api/form', details)
    .then((res) => {
      return res.data
    }).then(data => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    })
  //   const json = await response.json();
  //   if (!response.ok) {
  //     console.log(json.error)
  //   }
  //   if (response.ok) {
  //     setName('')
  //     setEmail('')
  //     setWhatsapp('')
  //     setBranch("");
  //     setRegistration("")
  //     setDomain("")
  //     console.log('new details added:', json)
  //     window.location.reload();
  //  }
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/form')
      .then(res => res.data)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }, [])


  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form action="/" method="POST" onSubmit={handlClick} >
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
          <div
            className="gender-details"
            onChange={(e) => {
              setDomain(e.target.value);
            }}
          >
            <input 
            type="radio" 
            name="Domain" 
            id="dot-1" 
            value="Tech" 
            />
            <input 
            type="radio" 
            name="Domain" 
            id="dot-2" 
            value="Social Media" 
            />
            <input
              type="radio"
              name="Domain"
              id="dot-3"
              value="Public Relations"
            />
            <input
              type="radio"
              name="Domain"
              id="dot-4"
              value="Marketing and Sponsors"
            />
            <input
              type="radio"
              name="Domain"
              id="dot-5"
              value="Graphics Design"
            />
            <input
              type="radio"
              name="Domain"
              id="dot-6"
              value="Content Writing"
            />
            <span className="gender-title">Domain</span>
            <div className="category">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="gender">Tech</span>
              </label>
              <label for="dot-2">
                <span className="dot two"></span>
                <span className="gender">Social Media</span>
              </label>
              <label for="dot-3">
                <span className="dot three"></span>
                <span className="gender">Public Relations</span>
              </label>
            </div>
            <div className="category">
              <label for="dot-4">
                <span className="dot four"></span>
                <span className="gender">Marketing and Sponsors</span>
              </label>
              <label for="dot-5">
                <span className="dot five"></span>
                <span className="gender">Graphics Design</span>
              </label>
              <label for="dot-6">
                <span className="dot six"></span>
                <span className="gender">Content Writing</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register"  />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
