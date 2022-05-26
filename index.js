// const submitData = (userName, userEmail) => {
//     return fetch(http://localhost:3000/users) 
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       body: JSON.stringify(formData),
//     //console.log('userName' + 'userEmail')
// }

// function submitData(name,email) {
//     fetch('http://localhost:3000/users') {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//           "name": name,
//           "email": email,
//         })
//     };
// }

// const body = document.querySelector('body');

// function submitData(name, email){
//     fetch('http://localhost:3000/users',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             "name": name,
//             "email": email,
//         })

//     })
//     .then(res => res.json())
//     .then(object => renderId(object))
//     .catch((error) => {
//         //alert("You done goofed");
//         body.append(error.message);
//     })
// };

// const renderId= (object) => {
//     body.append(object.id)
// }

let body = document.querySelector("body");

function submitData(name, email){
    let data = {
        name: name,
        email: email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch("http://localhost:3000/users", configObj).then(res => res.json()).then(function(resp){
        body.append(resp.id)
    }).catch((error) => {
        body.append(error.message)
    })
} 