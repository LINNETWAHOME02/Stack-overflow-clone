         /********AVATAR********/
import React from 'react'

const Animate = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {

  const style = {
    backgroundColor,
    padding: `${py} ${px}`, //py = top and bottom padding , px = left and right
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor: cursor || null,
    textDecoration: 'none'
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Animate
