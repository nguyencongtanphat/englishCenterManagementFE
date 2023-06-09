import React from "react";
import classes from "./../screens/ClassPeriodicTest.module.css";
import { useNavigate } from "react-router-dom";

function PeriodicTableRow({ sdtt, isUpdating, isEditable, onChange }) {
  const navigate = useNavigate();
  const changeHandler = (event) => {
    onChange(event.target.value, sdtt.StudentID, event.target.dataset.date);
  };

  return (
    <tr key={sdtt.StudentID} style={{ cursor: "pointer" }}>
      {/* Student info */}
      <th
        onClick={() => {
          navigate("/students/" + sdtt._id);
        }}
      >
        <div className={classes.imgDiv}>
          <img
            style={{
              height: "40px",
              width: "40px",
              objectFit: "fixed"
            }}
            src={sdtt.ImageURL}
            alt={sdtt.Name}
          ></img>
        </div>
        <div>
          <p className="mb-0 text-nowrap fw-semibold">{sdtt.Name}</p>
          <p className="mb-0 fw-light">{sdtt.StudentID}</p>
        </div>
      </th>

      {/* Average Score */}
      <td>{sdtt.averageScore}</td>

      {/* Scores by days */}
      {sdtt.periTests.map((test) => (
        <td key={Math.random()}>
          <input
            defaultValue={test.score}
            data-date={test.date}
            readOnly={!isUpdating}
            type="number"
            className="text-center bg-light border-0 w-100"
            style={{ outline: "none" }}
            onBlur={changeHandler}
          />
        </td>
      ))}

      {/* Scores in updating column */}
      {isUpdating && (
        <td id="newTestCol">
          <input
            defaultValue={0}
            readOnly={!isEditable}
            className="text-center bg-light border-0 w-100"
            style={{ outline: "none" }}
          />
        </td>
      )}
    </tr>
  );
}

export default PeriodicTableRow;
