import React from 'react';
import './SelectSubject.css'; 
import spiral from '../../assets/spiral.png';
function SelectSubject() {
    return (
        <div className="select_container">
          <h2 className="select_title">Choose Subject For Video Generation</h2>
          <select className="select-box">
            <option className="placeholder" value="">Please select an option</option>
            <option value="option1">Data Structures</option>
            <option value="option2">Algorithms</option>
            <option value="option3">Operating System</option>
            <option value="option4">Computer Networks</option>
          </select>
          <img src={spiral}  alt="Overlay Image" class="overlay-image"></img>
        </div>
    );
}

export default SelectSubject;
