export const randomUser = () => {
    let users = ["chaance", "jacob-ebey", "mcansh", "mjackson", "ryanflorence"];
    return users[Math.floor(Math.random() * users.length)];
  }