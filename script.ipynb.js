const API = "https://libretranslate.de/translate";
btn.onclick = async () => {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";
  output.value = "Translating...";
  let res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: input.value, source: from.value === "auto" ? "" : from.value,
      target: to.value, format: "text"
    })
  });
  let data = await res.json();
  output.value = data.translatedText || "Error";
};
newBtn.onclick = () => {
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen1").style.display = "block";
  input.value = ""; output.value = "";
};