import { useState } from "react";
import { Link } from "react-router-dom";
import studentsData from "../assets/students.json";

function HomePage() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>
      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}
        >
          Image
        </span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {students &&
        students.map((student) => {
          return (
            <div
              key={student._id}
              className="flex justify-between items-center p-2 border-b w-full"
            >
              <span
                className="flex items-center justify-center"
                style={{ flexBasis: "20%" }}
              >
                <img
                  src={student.image}
                  alt={`${student.firstName} ${student.lastName}`}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </span>
              <span style={{ flexBasis: "20%" }}>
                <Link to={`/students/${student._id}`}>
                  {student.firstName} {student.lastName}
                </Link>
              </span>
              <span style={{ flexBasis: "20%" }}>{student.program}</span>
              <span style={{ flexBasis: "20%" }}>{student.email}</span>
              <span style={{ flexBasis: "20%" }}>{student.phone}</span>
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
