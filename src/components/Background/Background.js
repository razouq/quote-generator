import React, { useState } from 'react'

import Quote from '../Quote/Quote';

import './Background.css'

export default function Background() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <div className="Background" style={{background: backgroundColor}}>
      <Quote setBackgroundColor={setBackgroundColor}/>
      <h4 className="author">by @Razouq</h4>
    </div>
  )
}
