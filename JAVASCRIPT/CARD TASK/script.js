
fetch('https://jsonplaceholder.typicode.com/users')
then(data=>data.json())
.then(user=>display(user))

function display(user){
  for(users of user ){
     htmldata=` <ul class=" mt-5">                                                                                                       
    <li class="list-group-item">id : ${users.id}</li>
    <li class="list-group-item">name : ${users.name}</li>
    <li class="list-group-item">username : ${users.username}</li>
    <li class="list-group-item">email : ${users.email}</li>
    <li class="list-group-item">address : ${users.address.street} , <br>
      ${users.address.suite} , <br>
      ${users.address.city}  , <br>
     ${users.address.zipcode} </li>
     <li class="list-group-item">geo : ${users.address.geo.lat} <br>
      ${users.address.geo.lng}
      </li>
     <li class="list-group-item">phone : ${users.phone}</li>
    <li class="list-group-item">website : <a href=""> ${users.website} </a></li>
    <li class="list-group-item">company  : ${users.company.name}  <br>
        ${users.company.catchPhrase} <br>
      ${users.company.bs}  </li>
  </ul>  `
  result.innerHTML += htmldata 
  }
}

