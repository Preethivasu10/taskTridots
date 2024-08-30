import React, { useState, useEffect } from 'react';
import './EmployeeLeaveTable.css';
import employeeLeaveData from './employeeLeaveData.json'; 

const EmployeeLeaveTable = () => {
  const localStorageKey = 'employeeLeaveData';  //  localStorage

  // Load data from localStorage or fall back to the initial JSON data
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(localStorageKey);
    return savedData ? JSON.parse(savedData) : employeeLeaveData;
  });      //initial JSON data///

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  const [newEntry, setNewEntry] = useState({
    name: '',
    status: '',
    employeeId: '',
    fromDate: '',
    totalLeaveDays: '',
    endDate: '',
  });

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }, [data]);

  const openModal = (entry = null) => {
    setIsModalOpen(true);
    setIsEditing(!!entry);
    setCurrentEntry(entry);

    if (entry) {
      setNewEntry({ ...entry });
    } else {
      setNewEntry({
        name: '',
        status: 'Pending', // Default status
        employeeId: '',
        fromDate: '',
        totalLeaveDays: '',
        endDate: '',
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewEntry({
      name: '',
      status: 'Pending',
      employeeId: '',
      fromDate: '',
      totalLeaveDays: '',
      endDate: '',
    });
    setCurrentEntry(null);
  };

  const handleSave = () => {
    if (isEditing) {
      const editedData = data.map(item =>
        item.id === currentEntry.id ? { ...newEntry, id: currentEntry.id } : item
      );
      setData(editedData);
    } else {
      const newData = {
        ...newEntry,
        id: data.length + 1,
      };
      setData([...data, newData]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prevEntry => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  return (
    <div className="table-container">
      <button className="add-button" onClick={() => openModal()}>Add New</button>

      <table className="employee-leave-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Status</th>
            <th>Employee ID</th>
            <th>From Date</th>
            <th>Total Leave Days</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><img src="/path-to-image" alt="profile" className="profile-pic" /> {item.name}</td>
              <td className={item.status === 'Pending' ? 'status-pending' : 'status-approved'}>
                {item.status}
              </td>
              <td>{item.employeeId}</td>
              <td>{item.fromDate}</td>
              <td>{item.totalLeaveDays}</td>
              <td>{item.endDate}</td>
              <td>
                <button className="edit-button" onClick={() => openModal(item)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditing ? 'Edit Entry' : 'Add New Entry'}</h2>
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={newEntry.name}
              onChange={handleChange}
            />
            <select
              name="status"
              value={newEntry.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              value={newEntry.employeeId}
              onChange={handleChange}
            />
            <input
              type="date"
              name="fromDate"
              value={newEntry.fromDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="totalLeaveDays"
              placeholder="Total Leave Days"
              value={newEntry.totalLeaveDays}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={newEntry.endDate}
              onChange={handleChange}
            />
            <div className="modal-actions">
              <button onClick={handleSave} className="save-button">Save</button>
              <button onClick={closeModal} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeLeaveTable;
