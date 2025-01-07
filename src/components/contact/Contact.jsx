import "./Contact.css";
import { TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    detail: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.detail) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.detail,
    };

    try {
      await emailjs.send(
        "service_fzaebdn",
        "template_i6hnnqj",
        templateParams,
        "FSWpBYYlXduYu3Hyq"
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", detail: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <h1 className="title">
          Contact <span style={{color: "#b429b4", fontStyle: "italic" }}>me</span>
      </h1>
      <div className="info">
        <form className="formContact" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            color="secondary"
            focused
            sx={{
              color: "white",
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "#b429b4",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#b429b4",
                },
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            color="secondary"
            focused
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "#b429b4",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#b429b4",
                },
              },
            }}
          />
          <TextField
            label="Message"
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            multiline
            rows={4}
            focused
            color="secondary"
            sx={{
              textarea: { color: "white" }, 
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "#b429b4",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#b429b4", 
                },
              },
            }}
          />

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
        </form>

        <div className="socialNet">
          <h1 style={{fontStyle: "italic" }}>Let&apos;s Connect !</h1>

          <a
            href="https://github.com/tngonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 60 }} />
          </a>
          <a href="https://www.linkedin.com/in/tylinngonzalez/">
            <LinkedInIcon style={{ fontSize: 60 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
