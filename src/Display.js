import React from 'react'

function Display({question, index, changeHandler}) {
    function optionChange(e){
        const temp = e.target.value === question.answer ? 1 : 0;
        changeHandler(temp, index)
    }
  return (
    <>
        <div className='alignLeft'>
            <h3>{question.title}</h3>
            <div onChange={optionChange}>
                <input type='radio' value='A' name={index} />{question.options[0]} &nbsp;
                <input type='radio' value='B' name={index} />{question.options[1]} &nbsp;
                <input type='radio' value='C' name={index} />{question.options[2]} &nbsp;
                <input type='radio' value='D' name={index} />{question.options[3]} &nbsp;
            </div>
        </div>
    </>
  )
}

export default Display
