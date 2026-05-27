import {useState} from "react";
import axios from "axios"
import "./App.css";
// import ReactMarkdown from "react-markdown";


function App(){

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  function handleChange(event){
    setPrompt(event.target.value);
  }

  console.log(response);
  async function generateResponse(){
        const res = await axios.post("http://127.0.0.1:8000/generate", {prompt: prompt})
        setResponse(res.data.response);
    }


  return(
      <div className="container">
  <h1>🤖 Full Stack AI Integration</h1>

  <div className="input-section">
    <h2>Enter Prompt</h2>
    <textarea
      placeholder="Ask anything..."
      value={prompt}
      onChange={handleChange}
    />
    <button onClick={generateResponse}>
      Generate Response
    </button>
  </div>

  <div className="response-box">
    <h2>AI Response</h2>
    <p>{response || "Your AI response will appear here..."}</p>
  </div>
</div>
  )
}

export default App