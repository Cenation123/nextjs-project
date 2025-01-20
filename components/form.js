"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const apiHost = "https://mohammeds128.sg-host.com/wp-json";
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(`${apiHost}/jwt-auth/v1/token`, {
          username: "orientAdmin",
          password: "5n4z81$2%v#$",
        });
        setToken(response.data.token);

        console.log("JWT Token:", response.data.token);
      } catch (err) {
        setError(err.response?.data || "an error ouccred ");
        console.error("Error:", err.response?.data || err.message);
      }
    };

    const fetchForms = async () => {
      try {
        const response = await axios.get(
          `${apiHost}/contact-form-7/v1/contact-forms/1619`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const fields = response.data.properties.form.fields[0];

        setFormData(fields);
      } catch (err) {
        setError("Error fetching forms");
        console.error(err);
      }
    };

    fetchToken();
    if (token) {
      fetchForms();
    }
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(" error here ", event.target.name, event.target.value);

    console.log(Object.entries(formData));

    if (undefined === token) {
      setError((error) => {
        error.message, (loading = false);
        return;
      });
    }
    localStorage.setItem("token", token);
    console.log(token);

    setLoading(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("_wpcf7", 1619);
      formDataToSend.append("_wpcf7_version", "6.0");
      formDataToSend.append("_wpcf7_locale", "en_US");
      formDataToSend.append("_wpcf7_unit_tag", `wpcf7-f${1619}-o1`);
      formDataToSend.append("_wpcf7_container_post", "0");
      formDataToSend.append("your-email", formData["your-email"]);

      const response = await axios.post(
        `${apiHost}/contact-form-7/v1/contact-forms/1619/feedback`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Let Axios handle this automatically
          },
        }
      );
      console.log(response);

      if (response.data.status === "mail_sent") {
        setStatus("Message sent successfully!");
      } else {
        setError("Failed to send message.");
      }
    } catch (err) {
      setError("An error occurred.");
      console.error(err);
    }
  };

  function handleInputChange(event) {
    setFormData({ [event.target.name]: event.target.value });
  }

  //
  return (
    <form
      className="wpcf7-form init"
      aria-label="Contact form"
      data-status="init"
      onSubmit={handleSubmit}
    >
      <div className="sub-wrap">
        <div className="input-wrapper">
          <span className="wpcf7-form-control-wrap" data-name="your-email">
            {formData && (
              <input
                size="40"
                aria-required="true"
                aria-invalid="false"
                placeholder="Your Email"
                type={formData.type}
                name="your-email"  // Match state key
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                onChange={handleInputChange}
                required
              />
            )}
          </span>
          <button type="submit" className="wpcf7-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
      {response && <p>Thank you for your submission!</p>}
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default ContactForm;
