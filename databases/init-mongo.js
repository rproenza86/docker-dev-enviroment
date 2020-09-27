db.createUser({
    user: 'developer',
    pwd: 'docker',
    roles: [{ role: 'readWrite', db: 'development' }],
});
