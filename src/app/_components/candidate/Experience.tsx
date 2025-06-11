import React from 'react'

type props = {
onText : ()=> void 
onBack : () => void
}

const Experience = ({onText,onBack}:props) => {
  return (
    <div>
      <p>Experience details </p>
    </div>
  )
}

export default Experience
