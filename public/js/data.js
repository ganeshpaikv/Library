const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      {  name: 'admin@abc.com', role: ROLE.ADMIN },
      { name: 'abcd@abc.com', role: ROLE.BASIC },
      
    ],
    // projects: [
    //   { id: 1, name: "Kyle's Project", userId: 1 },
    //   { id: 2, name: "Sally's Project", userId: 2 },
    //   { id: 3, name: "Joe's Project", userId: 3 }
    // ]
  }
  