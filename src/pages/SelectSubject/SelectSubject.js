import React, { useState } from 'react';
import './SelectSubject.css'; 

function SelectSubject() {
    return (
        <div>
          <h2>Choose Subject For Video Generation</h2>
          <select>
            <option value="">Please select an option</option>
            <option value="option1">Data Structures</option>
            <option value="option2">Algorithms</option>
            <option value="option3">Operating System</option>
            <option value="option4">Computer Networks</option>
          </select>
        </div>
      );
}

export default SelectSubject;