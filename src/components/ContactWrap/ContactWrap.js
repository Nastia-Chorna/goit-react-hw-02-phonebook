import React from "react";

const Contact = ({name, number, id, onDeleteName}) => {
    return (
        <><ul>
             <li>                        
                <p>{name}:</p>
            </li>
            <li>                        
                <p>{number}</p>
            </li>
            </ul>
            <button 
                onClick={()=> onDeleteName(id)}
                >delete
            </button>
        </>
    )
}
export default Contact