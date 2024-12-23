import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer - Exploring New Technologies",
          "Web Developer - Passionate about React and Django",
          "UI/UX Enthusiast - Focusing on Clean, User-Centered Design",
          "Blockchain Learner - Diving into Blockchain Concepts",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
