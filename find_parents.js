function find_parents(population_size, population){

    var lottery = [];

    for(var b=0; b<population_size; b++) {
        for(var w = 0; w < population[b][1]; w++) {
            lottery.push(population[b][0])
        }
    }

    var parents = [];
    var selected;
    var index;

    for(var p=0; p<population_size; p++){
        selected = random_item(lottery)
        parents.push(selected)
        index = lottery.indexOf(selected)
        lottery.splice(index, 1)
    }

    var is_max = 0;
    var dna = 0;

    for(var m=0; m<population_size; m++){
        if (population[m][1] > is_max){
            is_max = population[m][1]
            dna = population[m][0]
        }
    }
    return parents
}


function random_item(items){
    return items[Math.floor(Math.random()*items.length)];
}