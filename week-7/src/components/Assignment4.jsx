import React from "react";
import { useState } from "react";

const Assignment4 = () => {
  const para =
    "I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, " +
    "vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and " +
    "I tried it with semi-sweet chocolate chips. " +
    "It's better with both kinds. It comes out pretty bad with just the dark chocolate. " +
    "The best add-ins are crushed almonds and marshmallows what you get from that is Rocky Road. " +
    "It takes about twenty minutes from start to fridge, and then it takes about six months to work off " +
    "the twenty pounds you gain from eating it. All things in moderation, friends. All things in moderation.";
  const [wordLength, setWordLength] = useState(0);
  const [paragraph, setParagraph] = useState();

  function generatePara() {
    const words = para.split(/[,. ]+/);
    // console.log(words);
    const slicedWords = words.slice(0, wordLength);
    const paraGenerated = slicedWords.join(" ");
    setParagraph(paraGenerated);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Para Generator</h1>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <input
          type="text"
          placeholder="Enter number of words"
          style={{
            padding: "10px 60px",
            position: "relative",
          }}
          onChange={(e) => setWordLength(e.target.value)}
        />
        <button
          onClick={generatePara}
          style={{
            padding: "10px 10px",
            margin: "0px 10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Generate
        </button>
        <div style={{ margin: "35px 0px" }}>{paragraph}</div>
      </div>
    </>
  );
};

export default Assignment4;
