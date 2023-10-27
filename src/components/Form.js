import React from "react";

// directly destructure props
function Form({
  firstName,
  lastName,
  newsLetter,
  handleFirstname,
  handleLastname,
  handleNewsLetter,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={firstName} onChange={handleFirstname} />
      <input type="text" value={lastName} onChange={handleLastname} />

      <label htmlFor="news-letter">Subscribe to News Letter?</label>
      <input
        type="checkbox"
        id="news-letter"
        checked={newsLetter}
        onChange={handleNewsLetter}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
