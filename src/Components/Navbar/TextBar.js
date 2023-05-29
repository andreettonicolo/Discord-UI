import React, { useState } from "react";

const TextBar = () => {
const [text, setText] = useState("");

const handleTextChange = (event) => {
setText(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
console.log("Testo inserito:", text);
// Inserisci qui la logica per inviare il testo al server o al componente padre
setText("");
};

return (
<div className="text-bar-container">
<form onSubmit={handleSubmit} className="text-bar-form">
<input
       type="text"
       placeholder="Inserisci il testo"
       value={text}
       onChange={handleTextChange}
       className="text-bar-input"
     />
<button type="submit" className="text-bar-button">
Invia
</button>
</form>
</div>
);
};

export default TextBar;