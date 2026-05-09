document.addEventListener("DOMContentLoaded", () => {
  const configs = [
    { textareaId: "restrictedTextarea-1", counterId: "counter-1", limit: 250 },
    { textareaId: "restrictedTextarea-2", counterId: "counter-2", limit: null },
    { textareaId: "restrictedTextarea-3", counterId: "counter-3", limit: 250 },
  ];

  configs.forEach(({ textareaId, counterId, limit }) => {
    const textarea = document.getElementById(textareaId);
    const counter = document.getElementById(counterId);

    textarea.addEventListener("input", () => {
      const length = textarea.value.length;

      if (limit) {
        counter.textContent = `${length}` / `${limit}`;
      } else {
        counter.textContent = `${length}`;
      }
      if (limit && length >= limit) {
        textarea.style.borderColor = "red";
        textarea.style.color = "red";
        counter.style.color = "red";
      } else {
        textarea.style.borderColor = "#000";
        textarea.style.color = "black";
        counter.style.color = "#555";
      }
    });
  });
});
