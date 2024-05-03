function getUserData(userID) {
    return fetch(`https://example.com/users/${userID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      });
  }
  
  function saveUserData(userData) {
    return fetch('https://example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to save user data');
      }
    });
  }
  
  function changeStyleDelayed(elementID, delay) {
    setTimeout(() => {
      const element = document.getElementById(elementID);
      if (element) {
        element.style.color = 'red';
      }
    }, delay);
  }
  
  const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
  };
  
  saveUserData(user)
    .then(() => {
      console.log('User data saved successfully');
    })
    .catch(error => {
      console.log(error.message);
    });
  
  getUserData(123)
    .then(userData => {
      console.log(userData);
    })
    .catch(error => {
      console.log(error.message);
    });
  
  changeStyleDelayed('myElement', 2000);
  