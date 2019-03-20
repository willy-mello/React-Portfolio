import React from 'react'

export const DefaultForm = (props) => {
  return (
    <form id="contactForm" name="contactForm" onSubmit={props.handleSubmit}>
      <fieldset>
        <div>

          <label htmlFor='contactName'>Name <span className="required">*</span></label>
          <input type="text" defaultValue="" size="35" id="contactName" name="contactName"
            value={props.name}
            onChange={props.handleChange}
          />
        </div>
        <div>

          <label htmlFor='imageUrl'>Email <span className="required">*</span></label>
          <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div>

          <label htmlFor='address'>Subject <span className="required">*</span></label>
          <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject"
            value={props.subject}
            onChange={props.handleChange}
          />
        </div>
        <div>

          <label htmlFor="contactMessage">Message <span className="required">*</span></label>
          <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"
            value={props.message}
            onChange={props.handleChange}></textarea>
        </div>
        <div>

          <button className="submit" type='submit'>Submit</button>
          <span id="image-loader">
            <img alt="" src="images/loader.gif" />
          </span>
        </div>
      </fieldset>
    </form>
  )
}


