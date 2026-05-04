document.addEventListener("DOMContentLoaded", () => {

  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const speakBtn = document.getElementById("speak");
  const copyBtn = document.getElementById("copy");
  const tweetBtn = document.getElementById("tweet");
  const autoSpeakBtn = document.getElementById("auto-speak");
  const downloadBtn = document.getElementById("download");
  let autoSpeak = false;

  const API_KEY = "mNLUQAUuJKBDTbNhLj7KKQ==Emgfte2H1RhLdV36"; // Your API key
  const apiURL = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

  // Fetch quote from API
  async function getQuote() {
    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {
      const response = await fetch(apiURL, {
        headers: { "X-Api-Key": API_KEY }
      });
      if (!response.ok) throw new Error("API failed");

      const data = await response.json(); // API returns an array
      if (data.length > 0) {
        displayQuote(data[0].quote, data[0].author || "Unknown");
      } else {
        quoteText.textContent = "No quote found.";
        authorText.textContent = "";
      }

    } catch (error) {
      console.error("API request failed:", error);
      quoteText.textContent = "Oops! Could not fetch quote.";
      authorText.textContent = "";
    }
  }

  // Display quote with animation and optional auto-speak
  function displayQuote(text, author) {
    quoteText.textContent = `"${text}"`;
    authorText.textContent = `- ${author}`;

    // Animate card
    quoteText.parentElement.classList.remove("show");
    setTimeout(() => quoteText.parentElement.classList.add("show"), 50);

    // Auto speak
    if (autoSpeak) {
      const speech = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${authorText.textContent}`);
      window.speechSynthesis.speak(speech);
    }
  }

  // Buttons
  speakBtn.addEventListener("click", () => {
    if (!quoteText.textContent) return;
    const speech = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${authorText.textContent}`);
    window.speechSynthesis.speak(speech);
  });

  if (autoSpeakBtn) {
    autoSpeakBtn.addEventListener("click", () => {
      autoSpeak = !autoSpeak;
      autoSpeakBtn.textContent = `🔊 Auto Speak: ${autoSpeak ? "ON" : "OFF"}`;
    });
  }

  copyBtn.addEventListener("click", () => {
    if (!quoteText.textContent) return;
    navigator.clipboard.writeText(`${quoteText.textContent} ${authorText.textContent}`)
      .then(() => alert("Quote copied!"))
      .catch(() => alert("Copy failed!"));
  });

  tweetBtn.addEventListener("click", () => {
    if (!quoteText.textContent) return;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.textContent + " " + authorText.textContent)}`;
    window.open(tweetUrl, "_blank");
  });

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      html2canvas(document.querySelector(".quote-card")).then(canvas => {
        const link = document.createElement("a");
        link.download = "quote.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  }

  newQuoteBtn.addEventListener("click", getQuote);

  // Load initial quote
  getQuote();
});
