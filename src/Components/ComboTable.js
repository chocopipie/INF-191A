import React, { useState } from 'react';
import EventDetailsPopup from './EventDetailsPopup';

const TableComponent = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedEventComboID, setSelectedEventComboID] = useState(null); // State to store the selected eventComboID
  const [modalShow, setModalShow] = useState(false); // State to control the visibility of the modal

  const tableData = [
    { eventComboID: 221, EventDate: '2024-01-25T19:00:00-08:00', RotationStatus: 'EXPIRED' },
    { eventComboID: 632, EventDate: '2024-01-25T18:00:00-08:00', RotationStatus: 'IN_PROGRESS' },
    { eventComboID: 691, EventDate: '2024-01-25T17:00:00-08:00', RotationStatus: 'WAITING' },
    { eventComboID: 829, EventDate: '2024-01-25T16:00:00-08:00', RotationStatus: 'WAITING' },
  ];

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }
    setSortConfig({ key, direction });
  };

  const handleEventComboIDClick = (eventComboID) => {
    const selectedRow = tableData.find((row) => row.eventComboID === eventComboID);
    if (selectedRow) {
      setSelectedEventComboID(eventComboID);
      setModalShow(true);
    }
  };
  

  const sortedData = () => {
    const sortableData = [...tableData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  return (
    <div>
      <h2>Table Data</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th onClick={() => requestSort('eventComboID')} style={{ cursor: 'pointer', position: 'relative', border: '1px solid #ddd', backgroundColor: '#CAD0CD', color: '#333' }}>
              eventComboID 
              <span style={{ position: 'absolute', right: '20px' }}>↑</span>
              <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>↓</span>
            </th>
            <th onClick={() => requestSort('EventDate')} style={{ cursor: 'pointer', position: 'relative', border: '1px solid #ddd', backgroundColor: '#CAD0CD', color: '#333' }}>
              Event Date 
              <span style={{ position: 'absolute', right: '20px' }}>↑</span>
              <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>↓</span>
            </th>
            <th onClick={() => requestSort('RotationStatus')} style={{ cursor: 'pointer', position: 'relative', border: '1px solid #ddd', backgroundColor: '#CAD0CD', color: '#333' }}>
              Rotation Status 
              <span style={{ position: 'absolute', right: '20px' }}>↑</span>
              <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>↓</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData().map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px'}}>
                <button 
                  onClick={() => handleEventComboIDClick(item.eventComboID)}
                >
                  {item.eventComboID}
                </button>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px', color: '#666' }}>{item.EventDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', color: '#666' }}>{item.RotationStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <EventDetailsPopup 
          show={modalShow} 
          onHide={() => setModalShow(false)}
          dataAccountID={selectedEventComboID}
          season="sample"
          combo="sample"
          eventStartDate="sample"
          eventEndDate="sample"
          status={selectedEventComboID ? tableData.find((row) => row.eventComboID === selectedEventComboID)?.RotationStatus : ""}
        />
    </div>
  );
};

export default TableComponent;
