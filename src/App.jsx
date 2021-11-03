import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form/Form';
import React from 'react'
import { CreditCard } from './components/CreditCard/CreditCard';
import '../src/components/Form/creditcard.css'


function App() {
  const [formData, setFormData] = React.useState({
    cName: '',
    cNumber: '',
    month: '',
    year: '',
    cvv: ''

  })

  const [data, setData] = React.useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, formData])
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="left-container">
        <Form onSubmit={handleSubmit}>

          <label htmlFor="name" className="cName"> cardholder name
          </label>

          <input
            id="name"
            onChange={handleChange}
            name="cName"
            type="text"
            placeholder="card holder name" />
          <div className="nameIcon">

            <span className="material-icons">
              manage_accounts
            </span>
          </div>

          <label htmlFor="cNumber" className="cNumber">Card Number
          </label>

          <input
            id="cNumber"
            onChange={handleChange}
            name="cNumber"
            type="text"
            // pattern="[0-9]{16}"
            placeholder="card number"
            title="Please enter exact 16 digits card number"
            required
          />
          <div className="ccIcon">

            <span className="material-icons">
              credit_card
            </span>
          </div>


          <div className="row">
            <label htmlFor="month" className="month">Expiry month
            </label>

            <input
              id="month"
              onChange={handleChange}
              name="month"
              type="text"
              placeholder="expiry month"
              // pattern="[0-9]{2}"
              title="enter only 2 digits only"
              required

            />
            <div className="monthIcon">

              <span className="material-icons">
                calendar_today
              </span>
            </div>

            <label htmlFor="year" className="year">Expiry year
            </label>
            <input
              id="year"
              onChange={handleChange}
              name="year"
              type="text"
              placeholder="expiry year"
              // pattern="[0-9]{4}"
              title="enter only 4 digits"
              required
            />
            <div className="yearIcon">
              <span className="material-icons">
                calendar_today
              </span>
            </div>


            <label htmlFor="cvv" className="cvv">cvv
            </label>

            <input
              id="cvv"
              onChange={handleChange}
              name="cvv"
              type="text"
              placeholder="CVV"
              // pattern="[0-9]{3}"
              title="enter only 3 digits"
              required
            />

            <div className="cvvIcon">
              <span className="material-icons">
                lock
              </span>
            </div>
          </div>
          <p> Payment amount: <span className="red">12 300 P</span> </p>
          <input type="submit" value="Pay" className="submit" />



        </Form>
        <CreditCard data={data} />
      </div>
    </div>
  );
}

export default App;
