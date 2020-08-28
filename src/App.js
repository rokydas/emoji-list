import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fakeData from './fakeData/fakeData';
import TableData from './Components/tableData/TableData';
import { Table } from 'react-bootstrap';

function App() {
  // console.log(fakeData);
  const validData = fakeData.filter(data => data != null);
  return (
    <div className="container">
      <div className="header">
        <h1>All Emoji Collection</h1>
        <h5>These data are crawled from <a target="_blank" href="http://www.unicode.org/emoji/charts/full-emoji-list.html">HERE</a></h5>
      </div>
      <Table className="table" striped bordered hover size="md">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Emoji Code</th>
            <th>Browser</th>
            <th>Facebook</th>
            <th>Twitter</th>
            <th>Google</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            validData.map(data => <TableData key = {data.id} data={data}></TableData>)
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
