const usersContainer = document.querySelector(".users");
console.log(usersContainer);
const user = {
  email: "naluwagga@gmail.com",
  name: "tracy naluwagga",
};

const users = [
  {
    email: "kirabo@gmail.com",
    name: "Benitah kirabo",
  },
  {
    email: "travy@gmail.com",
    name: "Tracy",
  },
  {
    email: "moose@gmail.com",
    name: "moose",
  },
];

users.forEach((user) => {
  const userHTML=`
  <div clas = "user ">
  <h2>Name:${user.name}</h2>
  <h3>email:${user.email}</h3>
</div>
  `
  usersContainer.insertAdjacentHTML("beforeend" , userHTML)
  // usersContainer.insertAdjacentHTML(
  //   ("beforeend",userHTML)
  // ) 
  
});
// users.forEach(user)={
//  console.Log(user);
//  constuserHTML=`
//  <div class ="user">
//   <h2>Name:${user.name}</h2>
//   <h3>email:${user.email}</h3>
//    </div>
// };
