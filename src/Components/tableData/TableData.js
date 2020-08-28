import React from 'react';
import './TableData.css';

const tableData = (props) => {
    // const data = props.data;
    const { id, code, browser, fb, google, twitter, name } = props.data;
    
    return (
        <tr>
            <td>{id}</td>
            <td>{code}</td>
            <td>{browser}</td>
            <td><img src={fb} alt=""/></td>
            <td><img src={twitter} alt=""/></td>
            <td><img src={google} alt=""/></td>
            <td>{name}</td>
        </tr>
    );

    
};

export default tableData;