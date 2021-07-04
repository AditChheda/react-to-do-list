import React, { useState } from 'react';
import './to-do-list.css';
import ToDoListAddedItem from './ToDoListAddedItem'
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const ToDoList = () => {

    const [stateVariable, functionState] = useState("");
    const [addedItemsArrayVariable, functionAddedItemsArray] = useState([]);

    const inputEvent = (event) => {
        event.preventDefault();
        functionState(event.target.value);
    }

    const buttonClicked = () => {
        functionAddedItemsArray((oldArray) => {
            return [...oldArray, stateVariable];
        });
        functionState("");
    };

    const deleteItems = (id) =>{
        functionAddedItemsArray((oldArray) => {
            return oldArray.filter((arrayElement, index) => {
                return index !== id;
            });
        });
    };

    return(
        <>
            <div className="container bg-dark innerMainContainer" >
                <br />
                <h1 className="text-warning text-center">To Do List</h1>
                <div className="row bg-white">
                    <div className="col-8">
                        <input type="text" placeholder="Add Item" className="inputText" value={stateVariable} onChange={inputEvent}/>
                    </div>
                    <div className="col-4">
                        <button className="addButton mx-auto" onClick={buttonClicked}><AddBoxRoundedIcon /></button>
                    </div>
                </div>
                <div className="div-ol-li">
                    <ol>
                        {addedItemsArrayVariable.map(
                            (values, index) => {
                                return (
                                    <ToDoListAddedItem key={index} values={values} onSelect={deleteItems} id={index} />
                                );
                            }
                        )}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default ToDoList;