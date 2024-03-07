const pool = require("../../db");
const queries = require("./queries")

const getRecipeSummary = (req, res) => {
    pool.query(queries.getRecipeSummary, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getRecipeById, [id], (error, results) => {
        if (error) throw error;
        console.log(results.rows);
        res.body = res.status(200).json(results.rows).reduce((r, a) => {
            r[a.title] = r[a.title] || [];
            r[a.title] = push(a);
            console.log(r);
            return r;
        });
    });
};

const addRecipe = (req, res) => {
    const { title, source, servings, cook_time } = req.body;
    
    //check if URL is valid
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);
    const works = true;
    if (!source.match(regex)) {
        works = false;
    } 

};

module.exports = {
    getRecipeSummary,
    getRecipeById,
    addRecipe
};