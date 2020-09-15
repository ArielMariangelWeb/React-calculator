import React, { useState, useEffect } from 'react'

export const Calculator = ( {initialValue} ) => {

    //Create the hook useState
    const [inputValue, setInputValue] = useState(initialValue);

    //Create the calculator buttons in an array
    const buttons = ["+", "-", "*", "/",1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "." ]

    //Function that captures the 'value' property of each button, and at the same time,
    //updates the 'inputValue' property of our hook through 'setInputValue'
    const handleButtonPress= ( e ) =>{
        if (inputValue =='0') {
            setInputValue([e.target.value])
        }else{
            setInputValue( [ inputValue + e.target.value ] )
        }
    }

    return (
        <>
            <h2>Basic calculator</h2>
            <hr/>
            <form>
                <input 
                     type="text"
                     //Add the captured value of 'InputValue' of the different buttons pressed through the 'OnClick' function
                     value={ inputValue }
                />
             </form>
             <div className="buttons">
                {
                    //With the 'map' loop we can read the data stored inside the 'buttons' array,
                    // and then show it inside our 'input'
                   buttons.map( button =>{
                    return <button 
                              //Event that calls the 'handleButtonPress' function
                              onClick={ handleButtonPress }
                              //Pass the value of 'button' to be stored in both the 'value' property and the 'key' property
                              value= { button }
                              key= { button }
                            >
                              {/* render the button */}
                              { button } 
                            </button>          
                    })
                }
                 {/* clear button */}
                 {/* Change the state of 'inputValue' through 'setInputValue' and leave it empty */}
                 <button
                    className="ac"  
                    onClick={() => setInputValue("")} value="">
                AC
                </button>

                </div>

                <div>

                 {/* "=" button */}
                 {/* When the 'OnClick' event is executed, the state of the 'inputValue' changes through 'setInputValue'
                  'eval' evaluates the string of characters entered in our 'inputValue' converted by the expression 'String',
                  creating the output needed */}
                <button
                    className="equal"
                    onClick={() => {
                        setInputValue(
                            eval(String(inputValue)) 
                        );
                            console.log(inputValue);
                    }}
                    value="="
                >
                =
                </button>
            </div>   
        </>
    )
}

