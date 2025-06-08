const textarea = document.getElementById("messagebox");
const count = document.getElementById("count");
const warning = document.getElementById("warning");
const maxLength = 200;

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;

    if (currentLength > maxLength) {
        textarea.value = textarea.value.substring(0, maxLength);
    }

    const updatedLength = textarea.value.length;
    count.textContent = `${updatedLength}/${maxLength} characters`;

    if (updatedLength >= maxLength) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
});