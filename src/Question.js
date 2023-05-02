import { useState } from "react";

export default function Question({ question }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="sectfaq ">
      <div className={isOpen ? "open" : "closed" }>
        <h5 className="mt-3 mb-2">{question.title}</h5>
        <button className="faqbutton" onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}