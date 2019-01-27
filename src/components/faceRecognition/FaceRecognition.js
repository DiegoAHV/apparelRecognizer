import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, results}) => {
  console.log(results,imageUrl)
  return (
  <div className="center">  
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5">
      <img 
        src={imageUrl}
        className="db w-100 br2 br--top" alt="Apparel"/>
      <div className="pa2 ph3-ns pb3-ns bg-washed-red b--black-10">
        { results ?
          <div>
            <p>{results[0]}</p>
            <p>{results[1]}</p>
            <p>{results[2]}</p>
          </div> :
          <p>Loading...</p>
        }
      </div>
    </article>
  </div>
  )
}

export default FaceRecognition;