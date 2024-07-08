import React, { useState } from 'react';
function Feedback() {
 const [formData, setFormData] = useState({
 name: '',
 age: '',
 roll: '',
 class: '',
 feedback: ''
 });
 const [tableData, setTableData] = useState([]);
 
 const handleChange = (e) => {
 const { name, value } = e.target;
 setFormData({
 ...formData, // Spread the existing formData object
 [name]: value // Update the specific property with the new value
 });
 };
 const handleSubmit = (e) => {
 e.preventDefault();
 setTableData([...tableData, formData]);
 setFormData({
 name: '',
 age: '',
 roll: '',
 class: '',
 feedback: ''
 });
 };
 
 return (
 <div className="App">
 <h1>Student Feedback Form</h1>
 <div>
 <label>Name:</label>
 <input type="text"
 name="name"
 value={formData.name}
 onChange={handleChange} required />
 </div>
 <div>
 <label>Age:</label>
 <input type="number" name="age"
 value={formData.age}
 onChange={handleChange} required />
 </div>
 <div>
 <label>Roll:</label>
 <input type="text" name="roll" value={formData.roll}
onChange={handleChange} required />
 </div>
 <div>
 <label>Class:</label>
 <input type="text" name="class"
value={formData.class} onChange={handleChange} required />
 </div>
 <div>
 <label>Feedback:</label>
 <textarea name="feedback" value={formData.feedback}
onChange={handleChange} required></textarea>
 </div>
 <button type="submit" onClick={handleSubmit}>Submit</
button>
 
 <h2>Submitted Feedback</h2>
 <table>
 <thead>
 <tr>
 <th>Name</th>
 <th>Age</th>
 <th>Roll</th>
 <th>Class</th>
 <th>Feedback</th>
 </tr>
 </thead>
 <tbody>
 {tableData.map((data, index) => (
 <tr key={index}>
 <td>{data.name}</td>
 <td>{data.age}</td>
 <td>{data.roll}</td>
 <td>{data.class}</td>
 <td>{data.feedback}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
 }
export default Feedback;