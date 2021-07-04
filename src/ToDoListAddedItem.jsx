import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';

const ToDoListAddedItem = (props) => {

    const [text, strikeText] = useState(false);
    const functionStrike = () => {
        strikeText(true);
    }

    const functionUnStrike = () => {
        strikeText(false);
    }

    return(
        <>
            <li>
                <div className="row">
                    <div className="col-6 addedText" style={{ textDecoration : text ? 'line-through' : 'none', color : text ? 'green' : 'white'}}>{props.values}</div>
                    <div className="col-2">
                        <button className="strikeButton" onClick={functionStrike} >
                            <EventAvailableIcon/>
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="unStrikeButton" onClick={functionUnStrike} >
                            <EventBusyIcon/>
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="deleteButton" onClick={() => {props.onSelect(props.id)}}>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default ToDoListAddedItem;