
export async function getAllUsers() {

    try{
        const response = await fetch('/api/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function deleteAllUsers() {
    const response = await fetch('/api/users', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
    });
    return await response.json();
}

export async function deleteUsers(id) {
    const response = await fetch(`/api/user/${id}`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id})
    });
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}