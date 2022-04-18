import React from 'react';
import './Table.css';

function Table({ data }) {
  return (
    <table className='wrapper'>
      <h1 className='title'>Selected Files</h1>
      <div className="container">

        {/* <tbody className="list">
          {data.map((item) => (
            <tr key={item.id} className="listItem">
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody> */}

        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <p>{item.name}</p>
              <p>{item.role}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>

      </div>
    </table>
  )
}

export default Table