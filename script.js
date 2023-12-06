document.addEventListener("DOMContentLoaded", () => {
	// DOM elements
	const button = document.querySelector("button");
	const quote = document.querySelector("blockquote p");
	const author = document.getElementById("author");
	const tags = document.getElementById("tags");

	async function updateQuote() {
		// Fetch a random quote from the Quotable API
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		if (response.ok) {
			// Update DOM elements
			quote.textContent = '"' + data.content + '"';
			author.textContent = data.author;
			tags.textContent = data.tags;
			console.log(data.tags);
		} else {
			quote.textContent = "An error occured";
			console.log(data);
		}
	}

	// Attach an event listener to the `button`
	button.addEventListener("click", updateQuote);

	// call updateQuote once when page loads
	updateQuote();

	// copy quote to clipboard
	let handleCopyClick = document.querySelector(".copy");

	handleCopyClick.addEventListener("click", () => {
		let quoteText = quote.textContent;
		navigator.clipboard.writeText(`${quoteText}`);

		console.log("Quote copied to clipboard!");
	});
});
