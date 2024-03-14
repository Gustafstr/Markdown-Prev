import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const initialMarkdown = `
  # Akta er för AI
  ## Den är för bra för mänskligheten 

  Här har vi en go länk: [https://mistral.ai/]

  kolla denna koden: \`inline kod\`. 

  \`\`\`
  Detta är ett kodblock
  \`\`\`

  - Detta är en punkt i en punktlista.

  > Detta är ett blockcitat. 

  ![Alternativ text](https://e3.365dm.com/23/06/2048x1152/skynews-terminator-machines_6176635.jpg?20230603003135 "Akta er för i helvete")


  **Detta är fet text.**

  `;

  // tillstånd för att lagra texten från editor
  const [text, setText] = useState(initialMarkdown);

  // hanterar ändringar i texten och uppdaterar tillståndet
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Funktion för att omvandla markdown till HTML med marked
  const getMarkDownText = () => {
    const rawMarkup = marked(text, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <div className="editor-container">
        <div className="editor-header">Editor</div>
        <textarea id="editor" value={text} onChange={handleChange}></textarea>
      </div>
      <div className="previewer-container">
        <div className="previewer-header">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={getMarkDownText()}></div>
      </div>
    </div>
  );
}

export default App;
