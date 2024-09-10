const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch(
      "https://linuxer3443.pythonanywhere.com/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchQuery }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    sessionStorage.setItem("searchResults", JSON.stringify(jsonResponse));
    router.push(`/results`);
  } catch (error) {
    console.error("Error:", error);
    setError("An error occurred while searching. Please try again.");
  } finally {
    setIsLoading(false);
  }
};
