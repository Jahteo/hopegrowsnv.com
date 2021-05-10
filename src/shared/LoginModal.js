import React from 'react'
import './LoginModal.css'

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined'

// this is just pulled from w3schools for the moment, should be cleaned and possibly use state later. It's currenlty set just for the loginModal, but would be a great reusable component

export default function Modal(header, body, footer, id) {
  function openmyBtn() {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
  }

  function closeModal() {
    const modal = document.getElementById('myModal')
    modal.style.display = 'none'
  }

  if (isBrowser) {
    // Everything using window.onclick
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function closeModalOther(event) {
      const modal = document.getElementById('myModal')
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    }
  }
  return (
    <>
      {/* <!-- Trigger/Open The Modal --> */}
      <button
        id="myBtn"
        type="button"
        className="button"
        onClick={() => openmyBtn()}
        style={{ lineHeight: '2em' }}
      >
        Log In
      </button>

      {/* // <!-- The Modal --> */}
      <div id="myModal" className="modal">

        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="bg-img">
            <form action="/action_page.php" className="modalContainer">
              <button type="button" className="close" onClick={() => closeModal()}>&times;</button>
              <p>To protect your privacy, a custom link will be sent to your email. This link will allow you to log in to our medical portal for the next 24 hours.</p>
              <label htmlFor="email"><b>Email Address:</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <button type="button" className="btn">Get Custom Link</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
