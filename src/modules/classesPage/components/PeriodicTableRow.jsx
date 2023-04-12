import React from "react";
import classes from "./../screens/ClassPeriodicTest.module.css";

function PeriodicTableRow({ sdtt, isUpdating, isEditable, onChange }) {
  const changeHandler = (event) => {
    onChange(event.target.value, sdtt.StudentID, event.target.dataset.date);
  };

  return (
    <tr key={sdtt.StudentID}>
      {/* Student info */}
      <th>
        <div className={classes.imgDiv}>
          <img
            style={{
              height: "100%",
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
      {sdtt.perTests.map((test) => (
        <td>
          <input
            defaultValue={test.score}
            data-date={test.date}
            readOnly={!isUpdating}
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
