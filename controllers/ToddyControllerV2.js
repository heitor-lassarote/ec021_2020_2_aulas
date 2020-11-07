const Toddy = require('../models/Toddy');

module.exports = {
    create: async (req, res) => {
        console.log("Executando rota POST");
        let { lote, conteudo, validade } = req.body;

        try {
            const resposta = await Toddy.create({lote, conteudo, validade});
            if (resposta) {
                return res.json(201, resposta);
            } else {
                return res.json(404);
            }
        } catch (err) {
            return res.json(500, {error: err});
        }
    },
    update: async (req, res) => {
        console.log("Executando rota PATCH");
        let { id } = req.params;
        let { lote, conteudo, validade } = req.body;

        try {
            const resposta = await Toddy.findByIdAndUpdate(id, {lote, conteudo, validade}, {new: true});
            if (resposta) {
                return res.json(200, resposta);
            } else {
                return res.json(404);
            }
        } catch (err) {
            return res.json(500, {error: err});
        }
    },
    search: async (req, res) => {
        console.log("Executando rota GET");
        let { id } = req.query;

        try {
            const resposta = id ? await Toddy.findById(id) : await Toddy.find({});
            if (resposta) {
                return res.json(200, resposta);
            } else {
                return res.json(404);
            }
        } catch (err) {
            return res.json(500, {error: err});
        }
    },
    remove: async (req, res) => {
        console.log("Executando rota DELETE");
        let { id } = req.params;

        try {
            const resposta = await Toddy.findByIdAndRemove(id);
            if (resposta) {
                return res.json(200, resposta);
            } else {
                return res.json(404);
            }
        } catch (err) {
            return res.json(500, {error: err});
        }
    }
}
