import React from 'react'
import { Link } from 'react-router-dom';

function NoClass() {
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <p style={{ marginTop: "16px" }}>No classes exist</p>
        </div>
    )
}

export default NoClass;