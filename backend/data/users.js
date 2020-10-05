import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@mail.ru',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Artem Rimarchyk',
    email: 'artem_rimarchyk@mail.ru',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nix Durple',
    email: 'nik@mail.ru',
    password: bcrypt.hashSync('qwerty', 10),
  },
  {
    name: 'Dashka Rimachyk',
    email: 'dashka@mail.ru',
    password: bcrypt.hashSync('paratops2', 10),
  },
  {
    name: 'Joe Doe',
    email: 'joe998@mail.ru',
    password: bcrypt.hashSync('Xdsd736fgg', 10),
  },
]

export default users
