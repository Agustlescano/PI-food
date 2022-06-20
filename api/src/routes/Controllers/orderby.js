function orders(recipes,order) {
    console.log('aca entra')
    return recipes.sort((a,b) => {
        if(order === 'name ascent'){
            return a.name > b.name ? 1 : -1
        }
        if(order === 'name descent'){
            return a.name < b.name ? 1 : -1
        }
        if(order === 'puntuacion'){
            return a.puntuacion > b.puntuacion ? 1 : -1
        }
    })
    
}
module.exports = orders