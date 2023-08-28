// Fetch data from API using fetch API
function getData() {
	showSpinner();
	const data = fetch('https://randomuser.me/api/')
		// First, the API fetches results from endpoint.
		// Use obj.json() to retrieve data
		.then((res) => res.json())
		// Then, gets actual data, passing it to displayUser below
		.then((data) => displayUser(data.results[0]));
}

// Displaus user info
function displayUser(user) {
	// Sets background color based on gender
	if (user.gender === 'female') {
		document.body.style.backgroundColor = 'rebeccapurple';
	} else {
		document.body.style.backgroundColor = 'steelblue';
	}

	// Populates HTML
	const div = document.querySelector('#user');
	div.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.state}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>
    `;
	hideSpinner();
}

// Show Spinner before data is retrieved
function showSpinner() {
	document.querySelector('.spinner').classList.remove('hidden');
}

// Hide Spinner after data has been retrieved
function hideSpinner() {
	document.querySelector('.spinner').classList.add('hidden');
}

// Event listener attached to Generate User button
document.querySelector('#generate').addEventListener('click', getData);
