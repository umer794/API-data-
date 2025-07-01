const container = document.getElementById('user-container');

fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => {
    const users = data.results;
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
      card.innerHTML = `
        <div class="card">
          <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
          <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
            <p class="card-text">
              <strong>Email:</strong> ${user.email}<br>
              <strong>Location:</strong> ${user.location.city}, ${user.location.country}
            </p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerHTML = `<p class="text-danger">Failed to load users.</p>`;
    console.error(error);
  });



