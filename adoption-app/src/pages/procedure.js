import React, { useState } from 'react'

const Contact = () => {
  const [age, setAge] = useState('')

  //Volunteers
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [dob, setdob] = useState('');
  const [phoneNo, setphoneNo] = useState('');

  //Adopters
  const [nric, setNric] = useState('');
  const [reason, setReason] = useState('');

  //Releasers
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');

  //npx json-server --watch data/volunteer.json --port 9000
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents refreshing the page
    const volunteerData = {fName, lName, dob, phoneNo};

    fetch('http://localhost:9000/volunteer',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(volunteerData)
    }).then(()=> {
      console.log('New data added')
    })
  }

    //npx json-server --watch data/adoptors.json --port 10000
  const handleSubmit2 = (e) => {
    e.preventDefault(); //Prevents refreshing the page
    const AdoptorData = {fName, lName, nric, phoneNo, reason};

    fetch('http://localhost:10000/adoptors',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(AdoptorData)
    }).then(()=> {
      console.log('New data added')
    })
  }

  //npx json-server --watch data/releaser.json --port 11000
  const handleSubmit3 = (e) => {
    e.preventDefault(); //Prevents refreshing the page
    const ReleaserData = {fName, lName, nric, breed, age, image, phoneNo, reason};

    fetch('http://localhost:11000/releaser',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ReleaserData)
    }).then(()=> {
      console.log('New data added')
    })
  }



  return (
    <div className = "heading">
      <div className = "volunteer">
      <h1> Register as a volunteer </h1>
      <p> Want to be part of this awesome community that cares and help care for pets that are awaiting a second home?</p>

        <div className = "create">
          <form onSubmit ={handleSubmit}>
            <label> First Name</label>
                <input 
                type = "text"
                required
                value = {fName}
                onChange ={(e) => setfName(e.target.value)}
                />
            <label> Last Name</label>
                <input 
                type = "text"
                required
                value = {lName}
                onChange ={(e) => setlName(e.target.value)}
                />
            <label> Date of Birth</label>
                <input 
                type = "date"
                required
                value = {dob}
                onChange ={(e) => setdob(e.target.value)}
                />
            <label> Phone Number</label>
                <input 
                placeholder = "+65 "
                type = "number"
                required
                value = {phoneNo}
                onChange ={(e) => setphoneNo(e.target.value)}
            />
            <button>Submit</button>
          </form>
          </div>
        </div>

        <div className = "Adopt">
      <h1> Adopt a pet </h1>
      <p> Any of our cute little friends interest you? <br/>They're excited for a new home and more importantly a responsible owner!</p>

        <div className = "create">
          <form onSubmit ={handleSubmit2}>
            <label> First Name</label>
                <input 
                type = "text"
                required
                value = {fName}
                onChange ={(e) => setfName(e.target.value)}
                />
            <label> Last Name</label>
                <input 
                type = "text"
                required
                value = {lName}
                onChange ={(e) => setlName(e.target.value)}
                />
            <label> NRIC</label>
                <input 
                type = "text"
                required
                value = {nric}
                onChange ={(e) => setNric(e.target.value)}
                />
            <label> Phone Number</label>
                <input 
                placeholder = "+65 "
                type = "number"
                required
                value = {phoneNo}
                onChange ={(e) => setphoneNo(e.target.value)}
            />

            <label> Reason for Adopting</label>
                <textarea
                  required
                  value = {reason}
                  onChange = {(e) => setReason(e.target.value)}
                ></textarea>
          
            <button>Submit</button>
          </form>
          </div>
        </div>

        <div className = "Release">
      <h1> Release a pet </h1>
      <p> Want to be part of this awesome community that cares and help care for pets that are awaiting a second home?</p>

        <div className = "create">
          <form onSubmit ={handleSubmit3}>
            <label> First Name</label>
                <input 
                type = "text"
                required
                value = {fName}
                onChange ={(e) => setfName(e.target.value)}
                />
            <label> Last Name</label>
                <input
                  type = "text"
                  required
                  value = {lName}
                  onChange = {(e) => setlName(e.target.value)}
                />
            <label> NRIC</label>
                <input 
                type = "text"
                required
                value = {nric}
                onChange ={(e) => setNric(e.target.value)}
                />
             <label> Pet Breed</label>
                <input 
                type = "text"
                required
                value = {breed}
                onChange ={(e) => setBreed(e.target.value)}
                />
            <label> Pet Age</label>
                <input
               
                type = "number"
                required
                value = {age}
                onChange ={(e) => setAge(e.target.value)}
            />
            <label> Pet Photo</label>
                <input
                placeholder = "url"
                type = "url"
                required
                value = {image}
                onChange = {(e) => setImage((e.target.value))}
                />

            <label> Phone Number</label>
                <input 
                placeholder = "+65 "
                type = "number"
                required
                value = {phoneNo}
                onChange ={(e) => setphoneNo(e.target.value)}
            />

            <label> Reason for Releasing</label>
                <textarea
                  required
                  value = {reason}
                  onChange = {(e) => setReason(e.target.value)}
                ></textarea>
            <button>Submit</button>
          </form>
          </div>
        </div>
      </div>
  )
}

export default Contact