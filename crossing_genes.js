function crossing_genes(parents_population, population_size){
    // console.log("Czas na krzyżowanie genów!")

    tab = []
    childs = []
    var splited_parent_1 =[]
    var splited_parent_2 =[]
    var child_1=[]
    var child_2=[]
    var which_gen

    // pętla dla pary rodziców
    for(var d=0; d<population_size; d++){

        splited_parent_1 = parents_population[d][0].split(" ")
        splited_parent_2 = parents_population[d+1][0].split(" ")

        //pętla do przejścia przez geny, tworzenie 2 dzieci z 2 rodziców
        for(var k=0;k<8;k++) { // 8 to liczba genów w kodzie dna

            which_gen = random_item([1, 2])
            if (which_gen === 1) {
                child_1.push(splited_parent_1[k])
            } else {
                child_1.push(splited_parent_2[k])
            }

            which_gen = random_item([1, 2])
            if (which_gen === 1) {
                child_2.push(splited_parent_1[k])
            } else {
                child_2.push(splited_parent_2[k])
            }
        }

        childs.push(child_1[0] + " " + child_1[1] + " " + child_1[2] + " " + child_1[3] + " " + child_1[4] + " " + child_1[5] + " " + child_1[6] + " " + child_1[7])
        childs.push(child_2[0] + " " + child_2[1] + " " + child_2[2] + " " + child_2[3] + " " + child_2[4] + " " + child_2[5] + " " + child_2[6] + " " + child_2[7])

        child_1.splice(0)
        child_2.splice(0)

        d++
    }
    return childs
}