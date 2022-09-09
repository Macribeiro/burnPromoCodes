const fs = require("fs")

//cria um module exports para que possamos chamar a funcao manipulateFiles (linha 6) na index.js
module.exports = {

    manipulateFiles: function () {

        //lê o arquivo template e o transforma em um JSON
        const data = JSON.parse(fs.readFileSync("./src/template_promotionalCode_redemption.json", "utf-8"))

        let content = []

        //para cada objeto dentro da const data o array content irá receber um comando de mongodb
        data.forEach(x => {
            content.push(`\ndb.promotionalCode.updateOne({_id: ${x._id}}, {$set: {code: ${x.code}, participantIdentifier: ${x.cpf}}})`)
        })

        //escrevemos um arquivo com os comandos na nossa pasta data
        fs.writeFile("./data/updateMongoQueries.js", content.toString(), () => { })
    }
}