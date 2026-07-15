(() => {
  "use strict";

  const form = document.querySelector(".secure-contact-form");
  if (!form) return;

  const loading = form.querySelector(".loading");
  const errorMessage = form.querySelector(".error-message");
  const sentMessage = form.querySelector(".sent-message");
  const submitButton = form.querySelector('button[type="submit"]');

  const setSubmitting = (submitting) => {
    loading.classList.toggle("d-block", submitting);
    submitButton.disabled = submitting;
    submitButton.setAttribute("aria-disabled", String(submitting));
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorMessage.classList.remove("d-block");
    sentMessage.classList.remove("d-block");

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (String(data.get("_honey") || "").trim()) return;

    setSubmitting(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success === false) {
        throw new Error("Submission rejected");
      }

      form.reset();
      sentMessage.classList.add("d-block");
    } catch {
      errorMessage.textContent = "Your message could not be sent. Please try again in a moment or use the email address shown on this page.";
      errorMessage.classList.add("d-block");
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  });
})();
