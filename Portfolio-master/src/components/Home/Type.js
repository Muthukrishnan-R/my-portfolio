import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "QA Engineer",
          "Manual & API Testing Specialist",
          "GraphQL & Hasura API Validation",
          "End-to-End Workflow Validation",
          "Defect Investigation & Reporting",
          "Exploring Test Automation",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
