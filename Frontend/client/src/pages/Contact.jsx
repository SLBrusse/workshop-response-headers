import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://localhost:7076/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setStatus("Message sent"))
      .catch((err) => {
        console.error(err);
        setStatus("Error sending message.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-4 text-center">Contact</h2>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send
            </button>

            {status && <p className="mt-3 text-center text-muted">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
