const totalNoOfAttempts = 5;

const user1 = {
  name: "Sam Smith",
  noOfAttempts: 3,
};

const user2 = {
  name: "Oliver Smith",
};
console.log(`${user1.name} has ${totalNoOfAttempts - (user1.noOfAttempts ?? 0)} attempts left.`);
console.log(`${user2.name} has ${totalNoOfAttempts -( user2.noOfAttempts ?? 0)} attempts left.`);