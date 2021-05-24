import React, { useState } from 'react';

function LV () {
  const [count, setCount] = useState(0);

  return (
    <div className="lasvegas2">
      <h2>Las Vegas (PAGE 4)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Senectus morbi non massa commodo aliquet. Pulvinar et 
        ullamcorper risus, iaculis ullamcorper. Mus nunc, ante 
        volutpat phasellus a, iaculis aliquet condimentum. Volutpat, 
        eget feugiat eleifend at neque, at cursus. Dapibus id sed 
        eget dictum mi orci nunc dui, proin. Mi in tortor felis est 
        nunc, vitae suspendisse morbi vulputate. 
      </p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>{' '}
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p className="card-text">Quantity: {count}</p>
      <button>GO TO CHECKOUT (GO TO PAGE 5)</button>
    </div>
    )
}
 
export default LV