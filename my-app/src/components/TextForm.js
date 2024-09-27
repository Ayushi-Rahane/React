import React, {useState} from 'react'

export default function TextForm({heading}) {
    const [text, setText] = useState("enter text here: ");

  return (
    <div>
      <form>
            <div className="mb-3">
                <h1>{heading}</h1>
                <textarea  className="form-control" id="myBox" rows="8" value={text}></textarea>
            </div>

            <button className="btn btn-primary">Convert to Uppercase</button>

      </form>
    </div>
  )
}
