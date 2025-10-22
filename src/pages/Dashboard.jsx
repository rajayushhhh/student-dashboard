import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

 
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", major: "" });
  const [editingId, setEditingId] = useState(null); 

  
  const loadStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const studentList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setStudents(studentList);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  
  const handleAddOrEditStudent = async (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email || !newStudent.major) {
      alert("Please fill all fields!");
      return;
    }

    if (editingId) {
      
      const studentRef = doc(db, "students", editingId);
      await updateDoc(studentRef, newStudent);
      setEditingId(null); 
    } else {
      
      await addDoc(collection(db, "students"), newStudent);
    }

    setNewStudent({ name: "", email: "", major: "" });
    loadStudents();
  };

  
  const handleEditStudent = (student) => {
    setEditingId(student.id);
    setNewStudent({ name: student.name, email: student.email, major: student.major });
  };

 
  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteDoc(doc(db, "students", id));
      loadStudents();
    }
  };

 
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>🎓 Student Dashboard</h1>
        </div>
        <div className="header-right">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      <form onSubmit={handleAddOrEditStudent} className="add-student-form">
        <h3>{editingId ? "Edit Student" : "Add New Student"}</h3>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Major"
          value={newStudent.major}
          onChange={(e) => setNewStudent({ ...newStudent, major: e.target.value })}
        />
        <button type="submit">{editingId ? "Update Student" : "Add Student"}</button>
      </form>

      <h3 className="student-list-title">All Students</h3>
      <div className="student-grid">
        {students.map((s) => (
          <div key={s.id} className="student-card">
            <h4>{s.name}</h4>
            <p><strong>Email:</strong> {s.email}</p>
            <p><strong>Major:</strong> {s.major}</p>
            <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
              <button onClick={() => handleEditStudent(s)}>Edit</button>
              <button
                onClick={() => handleDeleteStudent(s.id)}
                style={{ background: "#ff5252" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
