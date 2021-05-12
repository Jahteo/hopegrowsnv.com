const React = require('react')

exports.onRenderBody = ({ setBodyAttributes, setPostBodyComponents }) => {
  setBodyAttributes({ className: 'is-preload' })

  setPostBodyComponents([
    <div id="navPanel" />,
  ])
}
