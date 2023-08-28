function getData() {
	showSpinner();
	const data = fetch('https://randomuser.me/api/')
		.then((res) => res.json())
		.then((data) => displayUser(data.results[0]));
}

function displayUser(user) {
	if (user.gender === 'female') {
		document.body.style.backgroundColor = 'rebeccapurple';
	} else {
		document.body.style.backgroundColor = 'steelblue';
	}

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

function showSpinner() {
	document.querySelector('.spinner').classList.remove('hidden');
}
function hideSpinner() {
	document.querySelector('.spinner').classList.add('hidden');
}

document.querySelector('#generate').addEventListener('click', getData);
