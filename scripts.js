const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click()
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name })
        }

        leitor.onerror = err => {
            reject(`Erro na leitura do arquivo: ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo);
    })
}

const imagemPrincipal = document.querySelector(".main-image");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
        try {
            const conteudoDoArquivo = await  lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;

        } catch (error) {
            console.log("Erro na leitura do arquivo:" + error);
        }
    }
})

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

listaTags.addEventListener('click', function(e) {
    console.log(e)
    if(e.target.tagName === 'IMG') {
        const tagQueremosRemover = e.target.parentElement;
        listaTags.removeChild(tagQueremosRemover);
    }
});

const tagsDisponiveis = ["Front-End", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}

inputTags.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const tagTexto = inputTags.value.trim();
        if(tagTexto !== "") {
            try {
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                console.log(tagExiste);
                if(tagExiste) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                    listaTags.appendChild(tagNova);
                    inputTags.value = "";
                } else {
                    alert("Tag não encontrada!")
                }
            } catch (err) {
                console.error("Erro ao verificar a existência da tag: "+err);
                alert("Erro ao verificar a existência da tag. Verifique o console")
            }
        }
    }
})

const botaoPublicar = document.querySelector(".botao-publicar");

async function publicarProjeto(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if(deuCerto) {
                resolve(`Projeto: ${data.nomeDoProjeto}, publicado com sucesso!` );
            } else {
                reject(`Erro ao publicar o projeto: ${data.nomeDoProjeto}` );
            }
        }, 2000)
    })
}

botaoPublicar.addEventListener("click", async (event) => {
    event.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    const data = {
        nomeDoProjeto: nomeDoProjeto,
        descricaoDoProjeto: descricaoDoProjeto,
        tagsProjeto: tagsProjeto,
    }
    const result = validaFormulario(data)
    if (!result.status) {
        alert(`Erro, preencha o ${result.value}`)
    } else {
        try {
            const result = await publicarProjeto(data);
            console.log(result);
            alert(result)
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }
})

const botaoDescartar = document.querySelector(".botao-descartar");
const formulario = document.getElementById("main-form");

botaoDescartar.addEventListener("click", async (event) => {
    event.preventDefault();

    formulario.reset();

    imagemPrincipal.src = "./img/imagem1.png";
    nomeDaImagem.textContent = "image_project.png";

    listaTags.innerHTML = "";
})

function validaFormulario(data) {
    for(let value in data){
        console.log(data)
        if(data[value] === "" || data[value].length === 0){
            switch (value) {
                case "nomeDoProjeto":
                    console.log(`oi 1`)
                    return {status: false, value: "Nome do Projeto"}
                case "descricaoDoProjeto":
                    console.log(`oi 2`)
                    return {status: false, value: "Descrição Do Projeto"}
                case "tagsProjeto":
                    console.log(`oi 3`)
                    return {status: false, value: "Tags do Projeto"}
            }
        }
    }
    return {status: true, value: ""}
}

formulario.addEventListener("focusout", (e) => {
    const element = e.target;
    console.log()
    if(element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        if(element.id === "input-tags") {
            if(listaTags.childElementCount > 0) element.classList.remove("invalid");
            else element.classList.add("invalid");
        } else {
            if(element.value === "") element.classList.add("invalid");
            else element.classList.remove("invalid");
        }
    }
})