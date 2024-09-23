const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


//Añade un usuario si no está en la lista

test('add user that is not into userController', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  expect(userController.getUsers()).not.toContain(user);

  //añadir el usuario
  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});

//No remueve un usuario que no está en la lista 
test('remove user that is not into userController', () =>{

  let user = new User(1234,"Santiago", "santiago@generation.org");
  let nonExistingUser = new User(5678, "Juan", "juan@example.com");

  userController.add(user);

  expect(userController.getUsers()).not.toContain(nonExistingUser);

  userController.remove(nonExistingUser);

  expect(userController.getUsers()).toContain(user);
  expect(userController.getUsers()).not.toContain(nonExistingUser);

});

//Encuentra el email cuando el usuario existe

test('should find a user by email when the user exists', () => {

  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(5678, "Juan", "juan@example.com");
  userController.add(user1);
  userController.add(user2);
  
  let foundUser = userController.findByEmail("juan@example.com");
  expect(foundUser).toBe(user2);
});

//Cuando el email no existe

test('should return undefined when the user with the email does not exist', () => {

  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(5678, "Juan", "juan@example.com");
  userController.add(user1);
  userController.add(user2);
  
  let foundUser = userController.findByEmail("maria@example.com");
  expect(foundUser).toBeUndefined();
});

//Cuando el usuario existe se puede encontrar por ID 
test('should find a user by ID when the user exists', () => {
  // Añadimos usuarios a la lista
  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(5678, "Juan", "juan@example.com");
  userController.add(user1);
  userController.add(user2);
  

  let foundUser = userController.findById(5678);
  expect(foundUser).toStrictEqual(user2); // Usamos toStrictEqual en lugar de toBe
});

//Retorna undefined cuando el ID del usuario no existe

test('should return undefined when the user with the ID does not exist', () => {

  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(5678, "Juan", "juan@example.com");
  userController.add(user1);
  userController.add(user2);
  
  // Intentamos buscar un usuario con un ID que no existe
  let foundUser = userController.findById(9999);
  expect(foundUser).toBeUndefined();
});