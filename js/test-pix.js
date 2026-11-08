(function () {
  "use strict";
  const form = document.getElementById("test-pix-form");
  const status = document.getElementById("test-pix-status");
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    status.textContent = "Preparando o Pix de teste…";
    try {
      const response = await fetch("/api/test-pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: document.getElementById("test-pix-email").value })
      });
      const result = await response.json();
      if (!response.ok || !result.checkoutUrl) {
        const provider = result.provider_code ? ` (código ${result.provider_code})` : "";
        throw new Error((result.message || "Não foi possível criar o Pix.") + provider);
      }
      window.location.assign(result.checkoutUrl);
    } catch (error) {
      status.textContent = error.message || "Falha ao gerar o Pix de teste.";
      button.disabled = false;
    }
  });
})();
