document.getElementById('addbutton').addEventListener('click', function() {
    const nomeInput = document.getElementById('FormControlInput');
    const nome = nomeInput.value.trim();

    const descricaoInput = document.getElementById('FormControlTextarea')
    const descricao = descricaoInput.value.trim()


    if (nome && descricao){
        const h1 = document.createElement('h1');
        h1.className = 'h1-title';
        h1.textContent = nome;

        const p = document.createElement('p')
        p.className = 'descricao-tarefa'
        p.textContent = descricao

        const tarefas = document.getElementById('tarefas');

        tarefas.appendChild(h1);
        tarefas.appendChild(p)
    }
});