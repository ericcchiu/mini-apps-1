import React from 'react';

const Form = (props) => {
  return (
    <div className="Form">
      <form>
        <input
          type="text"
          name="rawJSON"
          onChange={(event) => props.handleInputChange(event, 'rawJSON')} />
        <input type="submit" value="Submit" onClick={(event) => props.handleSubmit(event)} />
        {/* <input type="file" /> */}
      </form>

    </div>
  )
}

export default Form; 