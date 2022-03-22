import React, { useState } from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3e50"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#bdc3c7"

    }
  }
  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode}></TextForm>
    </>
  );
}

export default App;
