$(function(){
// Vider le paragraphe firstText. Supprimer tous les éléments du paragraphe secondText.
$('#firstText').empty();
/*empty méthode ne supprime pas l'élément lui-même, ou ses attributs, en d'autre terme l'élément sera simplement vidé de son contenue.*/
$('#secondText').remove();
/*méthode .remove() lorsque vous souhaitez supprimer l'élément lui-même, ainsi que tout ce qu'il contient. En plus des éléments enfants eux-mêmes */
});