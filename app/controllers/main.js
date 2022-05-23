import { QueryTypes } from "sequelize";
import { Colaboradores, sequelize } from "../models/index"

const index = async (req, res) => {

    const setores = await sequelize.query(`
        SELECT DISTINCT
            setor
        FROM
            Colaboradores;
    `, { type: QueryTypes.SELECT })
    const colaboradores = await Colaboradores.findAll();

    res.render("main/index",
        {
            colaboradores: colaboradores.map(colaboradores => colaboradores.toJSON()),
            setores: setores,
        });
}

const create = async (req, res) => {
    if (req.route.methods.get) {
        res.render("main/create");
    } else {
        await Colaboradores.create(req.body);
        res.redirect("/");
    }
}

const update = async (req, res) => {
    const colaborador = await Colaboradores.findOne({
        where: {
            id: req.params.id,
        }
    })

    if (req.route.methods.get) {
        res.render("main/update", { colaborador: colaborador.toJSON() });
    } else {
        await Colaboradores.update({
            nome: req.body.nome,
            cpf: req.body.cpf,
            setor: req.body.setor,
        }, { where: { id: req.params.id } });
        res.redirect("/");
    }
}

const remove = async (req, res) => {
    try {
        await Colaboradores.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Removido com sucesso');
    } catch (error) {
        res.status(500).send(error)
    }

}

const init = (req, res) => {
    req.session.uid = 1;
    res.redirect('/');
}

const filtrado = async (req, res) => {
    const colaboradores = await Colaboradores.findAll({where : {setor: req.params.setor}})

    res.render("main/setor_filtrado", 
    {
        colaboradores: colaboradores.map(colaboradores => colaboradores.toJSON()),
        setor: req.params.setor,
    })
}

export default { index, create, update, remove, init, filtrado }