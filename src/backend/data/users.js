const fs = require('node:fs/promises');

export const getRegisteredUsers = () => {
    const fileContent = fs.readFile('users.json', { encoding: 'utf-8'});
    const data = JSON.parse(fileContent);

    const registeredUsers = data.users ? data.users : [];

}

export const saveUsers = (users) => {
    return fs.writeFile('users.json', JSON.stringify({ users: users || []}));
}