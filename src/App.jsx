import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: "",
    graduated: false,
  });

  const handleFormChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents((prevStudents) => [formData, ...prevStudents]);
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: "",
      graduated: false,
    });
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              onChange={handleFormChange}
              value={formData.fullName}
              name="fullName"
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={handleFormChange}
              value={formData.image}
              name="image"
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              onChange={handleFormChange}
              value={formData.phone}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              onChange={handleFormChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              onChange={handleFormChange}
              name="program"
              value={formData.program}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleFormChange}
              value={formData.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              checked={formData.graduated}
              value={formData.checked}
              onChange={handleFormChange}
              name="graduated"
              type="checkbox"
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
