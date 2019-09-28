import React, { useState } from 'react'

function Form(props) {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [time, setCurrnetTime] = useState('')

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else if (e.target.name === 'message') {
      setMessage(e.target.value)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (title.length === 0 || message.length === 0) {
      alert('Please fill all field with proper values')
    } else {
      let today = new Date();
      let h = today.getHours(),
        dayZone,
        min =
          today.getMinutes() > 10 ? today.getMinutes() : `0${today.getMinutes()}`,
        sec =
          today.getSeconds() > 10 ? today.getSeconds() : `0${today.getSeconds()}`,
        day = today.getDate() > 10 ? today.getDate() : `0${today.getDate()}`,
        mon = today.getMonth() > 10 ? today.getMonth() : `0${today.getMonth()}`,
        year = today
          .getFullYear()
          .toString()
          .substring(2);
      if (h > 12) {
        dayZone = "AM";
      } else {
        dayZone = "PM";
        h = h % 12;
      }
      let currentTime = `${h}:${min}:${sec} ${dayZone}, ${mon}-${day}-${year}`;
      setCurrnetTime(`${currentTime}`)
      console.log(currentTime, time)
      props.addLog({ title, message, time })
    }
  }

  // Styles
  const addFormStyle = {
    padding: "1.5rem 2rem",
    border: "1px solid #dedede",
    backgroundColor: "#f9f9f9f9"
  };
  const heading = {
    fontSize: "1.5rem",
    fontWeight: "600"
  };
  const inputStyle = {
    width: "100%",
    fontSize: "1rem",
    padding: "8px",
    border: "1px solid #dedede",
    margin: "0.8rem 0"
  };
  const addBtnStyle = {
    backgroundColor: "#fff",
    color: "#0d1944",
    border: "1px solid #dedede",
    padding: "0.5rem 1rem",
    textTransform: "capitalize",
    fontSize: "1rem",
    cursor: "pointer"
  };


  return (
    <section style={ addFormStyle }>
      <p style={ heading }>Add new log</p>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ title }
          name="title"
          onChange={ handleChange }
          placeholder="Log Title"
          style={ inputStyle }
        />
        <textarea
          value={ message }
          name="message"
          onChange={ handleChange }
          placeholder="Log Message"
          style={ {
            ...inputStyle,
            fontSize: "1.4rem",
            height: "8rem",
            resize: "none"
          } }
        ></textarea>
        <button style={ addBtnStyle }>
          <i className="far fa-comment-alt"></i> submit log
          </button>
      </form>
    </section>
  );
}

export default Form
