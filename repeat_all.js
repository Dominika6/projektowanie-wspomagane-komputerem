function repeat_all(number_of_repetitions, starting_population, population_size){
    for(var g=0;g< population_size;g++){
        // console.log("Powtarzamy!", starting_population[g])
    }
    console.log("Powtarzamy!")

    var last_generation = []
    for(var j=0;j<population_size;j++){
        last_generation[j] = []
    }

    var parents_population_r = [];
    for(var j=0;j<population_size;j++){
        parents_population_r[j] = []
    }

    var childs_tab_r =[];
    for(var j=0;j<population_size;j++){
        childs_tab_r[j] = []
    }


    var aftermutation_r =[];
    for(var j=0;j<population_size;j++){
        aftermutation_r[j] = []
    }

    for(r=1;r<=number_of_repetitions; r++){
        // console.log("REPEAT: ", r," z ", number_of_repetitions)
        for(var o=0;o<population_size;o++) {
            // console.log("populacja w repicie:", starting_population[o])
        }
        // szukamy rodziców - selekcja
        var parents = find_parents(population_size, starting_population);

        for(var t=0; t<population_size; t++) {
            parents_population_r[t][0] = parents[t];
            parents_population_r[t][1] = rating(parents[t]);

            // console.log("REPEAT: Parents population(", t, "): ", parents_population_r[t])
        }
        // generowanie potomków
        childs = crossing_genes(parents_population_r, population_size)

        for(i=0;i<population_size;i++) {
            childs_tab_r[i][0] = childs[i];
            childs_tab_r[i][1] = rating(childs[i]);
            // console.log("childs ",i,":", childs_tab_r[i])

            //mutacja
            // var mutation_tab = [0, 0, 0, 0, 1]
            var mutation_tab = [0, 0, 0, 0, 0, 0, 0, 0, 1]
            // var mutation_tab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

            var does_it_mutate = random_item(mutation_tab)
            if (does_it_mutate === 0) {
                aftermutation_r[i] = childs_tab_r[i]
            } else {
                console.log("Mamy mutację osobnika: ", i, " w powtórzeniu: ", r)
                aftermutation_r[i] = mutation(childs_tab_r[i], i)
            }

        starting_population[i]=aftermutation_r[i]

        }

        // console.log("KONIEC REPEAT ", r)
    }
    var return_value =[]
    last_generation=aftermutation_r
    for(var e=0;e<population_size;e++){
        console.log("last genertion:", last_generation[e])
        return_value.push(last_generation[e][0])
    }

    return return_value
}