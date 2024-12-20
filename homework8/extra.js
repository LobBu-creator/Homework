function fetchRepositories() {
    const username = document.getElementById('username').value;
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (!username) {
      output.innerHTML = '<p>Please enter a username.</p>';
      return;
    }

    const url = `https://api.github.com/users/${username}/repos`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`User not found (status: ${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          output.innerHTML = '<p>No public repositories found.</p>';
          return;
        }

        const list = document.createElement('ul');
        data.forEach(repo => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
          list.appendChild(listItem);
        });

        output.appendChild(list);
      })
      .catch(error => {
        output.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }