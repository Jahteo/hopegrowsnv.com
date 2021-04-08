import React from 'react'
// import PropTypes from 'prop-types'

function SpecialHeader({ icon, header, paragraph }) {
  return (
    <header className="special container">
      <span className={`icon solid ${icon}`} />
      <h2>
        {header}
      </h2>
      <p>
        {paragraph}
      </p>
    </header>
  )
}

// SpecialHeader.propTypes = {
//   headerprop: PropTypes.node.isRequired,
//   paragraph: PropTypes.string,
//   icon: PropTypes.string,
// }

export default SpecialHeader
