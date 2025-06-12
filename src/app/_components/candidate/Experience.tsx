import React from 'react'

type props = {
onNext : ()=> void 
onBack : () => void
}

const Experience = ({onNext,onBack}:props) => {
  return (
    <div>
      <p>Experience details </p>
    </div>
  )
}

export default Experience
