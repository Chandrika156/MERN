import { useState } from "react";

export default function TodoList() {
    const [formData, setFormData] = useState({
        time: "",
        note: ""
    });

    const [TableData, setTableData] = useState([]);

    function handleFormChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTableData([...TableData, formData]);
        setFormData({
            time: "",
            note: ""
        });
    }

    return (
        <div>
            <h1>TodoList</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input name="time" type="time" value={formData.time} onChange={handleFormChange} />
                    <input name="note" type="text" value={formData.note} onChange={handleFormChange} />
                    <button type="submit">Submit</button>
                </form>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.time}</td>
                                <td>{data.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
