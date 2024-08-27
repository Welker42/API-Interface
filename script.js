const apiUrl = 'http://localhost:3000/api/users/';

// Função para buscar todos os usuários
function fetchUsers() {
    axios.get(apiUrl)
        .then(response => {
            const users = response.data;
            const userList = document.getElementById('users');
            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `${user.name} (${user.email}) 
                    <button class="edit-btn" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Editar</button>
                    <button class="delete-btn" onclick="deleteUser(${user.id})">Deletar</button>`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao buscar usuários:', error));
}

// Função para excluir um usuário
function deleteUser(userId) {
    console.log(`Enviando requisição DELETE para ${apiUrl}${userId}`);

    console.log(userId)

    axios.delete(`${apiUrl}${userId}`)
        .then(response => {
            console.log('Resposta da requisição DELETE:', response.data);
            fetchUsers();
        })
        .catch(error => console.error('Erro ao deletar usuário:', error));
}

// Inicializar a página
fetchUsers();
