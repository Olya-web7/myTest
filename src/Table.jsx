import React from 'react';
import './Table.css';

function Table({ data }) {
  return (
    <table className='wrapper'>
      <h1 className='title'>Selected Files</h1>
      <tbody className="list">
        {data.map((item) => (
          <tr key={item.id} className="listItem">
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table