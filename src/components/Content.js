import React from "react";
import "./common.css";
export default function Content(props) {
  const {  items, onCheck, onDelete  } = props;
  // const [checkedItems, setCheckedItems] = React.useState({});

  const contentStyle = {
    background: "aliceblue",
    // marginBottom:"10px",
    width: "57vw",
    height: "2.5rem",
    // paddingTop:"4px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  };
  const checkStyle = {
    marginLeft: "8%",
    marginTop: "20px",
    cursor: "pointer",
  };
  const labelStyle = {
    // paddingTop:"10px"
  };

  const svgPosition = {
    // marginLeft: "75%",
    // float:"right"
  };

  // console.log(items, "vaibhav");

  return (
    <div>
      {items.map((item, index) => (
        <div className="form-check" style={contentStyle} key={index}>
          <div>
          <input
            className="form-check-input mx-1 my-2"
            type="checkbox"
            checked={item.isCompleted}
            id={item.id}
            onChange={() => onCheck(item.id)}
          />
          <label className="form-check-label" htmlFor={item.id} style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}>
            {item.text}
          </label>
          </div>

          <div className="del-div" style={svgPosition}>
            <button className="delete-button" onClick={() => onDelete(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
