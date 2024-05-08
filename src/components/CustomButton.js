import React from "react";
import Button from "react-bootstrap/Button";

export default function CustomButton({ isButtonClicked }) {
  return (
    <Button variant="info" size="lg" onClick={() => isButtonClicked(true)}>
      Add
    </Button>
  );
}
