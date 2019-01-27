import React from 'react';
import './imageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f2 purple">
        {`This IA will detect the apparel in your pictures`}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-2 center form">  
          <input 
            className="f4 pa2 w-70 center bg-washed-red" type="text"
            onChange = {onInputChange}
            />
          <button 
            className="w-30 grow f4 link ph3 pv2 dib purple   bg-light-gray pointer"
            onClick={onButtonSubmit}>
            Detect!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;