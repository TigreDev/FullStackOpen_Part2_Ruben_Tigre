import React from 'react';

const BookLine = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.number}
            </td>
        </tr>
    )
}

export default BookLine;