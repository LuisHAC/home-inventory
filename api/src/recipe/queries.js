const getRecipeSummary = "SELECT R.TITLE, T.TAG FROM RECIPE R INNER JOIN TAG T ON R.ID = T.RECIPE_ID";
const getRecipeById = "SELECT * FROM RECIPE WHERE ID = $1";

module.exports = {
    getRecipeSummary,
    getRecipeById
};