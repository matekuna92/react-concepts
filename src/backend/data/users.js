const fs = require('node:fs/promises');

export const getRegisteredUsers = async () => {
    const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const registeredUsers = data.users || [];
    return registeredUsers;
}

export const storeUsers = async (users) => {
    return fs.writeFile('users.json', JSON.stringify(users || []));
}