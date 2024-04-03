
import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [question, setQuestion] = useState("");
  const[answer, setAnswer] = useState("");



  async function generateAnswer(){
   setAnswer("please wait 10s...");

   const response = await axios({
       
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB7AkAcJs4fI-G0rsYeGtlI9RlbsWDrzfg",
     
      method: "post",
        data: {
    
      contents: [
        { parts: [{ text:question }] }
      ],
      },
    });
    
    setAnswer( response["data"]["candidates"][0]["content"]["parts"][0]["text"])
    
   
   

















  }
  return (
    <>
      <h1 className='bg-red-300'>MOWA.ai</h1>

      <textarea
        className="border rounded w-full" 
      value={question} 
      onChange={(e) => setQuestion(e.target.value)}
       cols="30" 
       rows="10"
       placeholder='created by siva ganesh kurra'
       ></textarea>

      <button onClick={generateAnswer}>Generate Answer</button>
      <p>{answer}</p>
    </>
  )
}
export default App
