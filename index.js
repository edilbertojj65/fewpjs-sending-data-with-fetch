//Add your code here

   function submitData( name, email ) {
      let configObj = {
       method: "POST",  
       headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
       },
          body: JSON.stringify({
           name: name,
           email: email
        })
       };
  
  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
    //  console.log(object);
      document.body.innerHTML = object[ "id" ];
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
     // console.log(error.message);
      document.body.innerHTML = error.message;
    });

}