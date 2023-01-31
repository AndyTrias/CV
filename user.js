fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const fname = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const phone = user.phone;
    const picture = user.picture.large;
    const address = `${user.location.street.name} ${user.location.street.number}`;
    document.querySelector('#ruser').src=picture;
    document.querySelector('h1').innerHTML=fname;
    document.querySelector('#email').innerHTML=email;
    document.querySelector('#phone').innerHTML=phone;
    document.querySelector('#address').innerHTML=address;

  });
