import React from "react";
import PropTypes from "prop-types"
export const Filter = (props) => {
    return(
            <div className = "filterClass">
                <ul>
                    <li className = {props.allValue?'activatedFilter':'deactivatedFilter'} onClick = {props.allToggler}>All</li>
                    <li className = {props.remainingValue?'activatedFilter':'deactivatedFilter'} onClick = {props.remainingToggler}>Remaining</li>
                    <li className = {props.completedValue?'activatedFilter':'deactivatedFilter'} onClick = {props.completedToggler}>Completed</li>
                </ul>
            </div>   
    );

}

Filter.prototype = {
    tasks: PropTypes.function
}