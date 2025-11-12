const handleSearch = async () => {
const movieName = inputRef.current.value.trim();
if (!movieName) {
console.log("Please enter a movie name");
return;
}

    const url = "https://openrouter.ai/api/v1/chat/completions";
    const apiKey = "<OPENROUTER_API_KEY>"; // 🔑 Replace with your actual API key

    const data = {
      model: "z-ai/glm-4.5-air:free",
      messages: [
        {
          role: "user",
          content: `Tell me about the movie "${movieName}" — its story, cast, and similar films.`,
        },
      ],
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.choices[0].message.content); // 👈 AI’s reply
    } catch (error) {
      if (error.response) {
        console.error("API Error:", error.response.status, error.response.data);
      } else {
        console.error("Network or setup error:", error.message);
      }
    }

};
