//incluindo uma biblioteca
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');




//definicao de endereco / URL
const hostname = '127.0.0.1'; //localhost
const port = 3000;


//implementacao da regra de negocio
const server = http.createServer((req, res) => {

        var resposta;
        const urlparse = url.parse(req.url, true);

        //receber informacoes do usuario
        const params = queryString.parse(urlparse.search);

        //criar um usuario - atualizar um usuario
        if (urlparse.pathname == "/criar-atualizar-usuario") {


            //salvar as informacoes
            fs.writeFile('users/' + params.id + ".txt", JSON.stringify(params), function (err) {
                if (err) throw err;
                console.log('Saved!');

                resposta = "usuario criado/atualizado com sucesso";

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(resposta);
            });



            //selecionar usuario
        } else if (urlparse.pathname == "/selecionar-usuario") {
            fs.readFile('users/' + params.id + ".txt", function (err, data) {
                resposta = data;

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(resposta);

            });

        }


        //remover o usuario
        else if (urlparse.pathname == "/remover-usuario") {
            fs.unlink('users/' + params.id + ".txt", function (err) {
                if (err) throw err;
                console.log('File deleted!');

                resposta = err ? "usuario nao encontrado" : "usuario-removido";

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(resposta);
            });

        };

    }


);

// execucao
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//http://localhost:3000/criar-atualizar-usuario?nome=augusto&idade=24&id=1
//http://localhost:3000/criar-atualizar-usuario?nome=augusto&idade=47&id=1
//http://localhost:3000/selecionar-usuario?id=1
//http://localhost:3000/remover-usuario?id=1