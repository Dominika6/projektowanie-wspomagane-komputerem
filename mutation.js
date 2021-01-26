function mutation(population,i){

    // console.log("Mamy mutację osobnika: ", i)

//    możliwości dla konkretnych genów:
//     0- 0001
//     1- 0010
//     2- 0000, 0001, 0010, 0011, 0100, 0101, 0111, 1000, 1001, 1010
//     3- 0000, 0001, 0010, 0011, 0100, 0101, 0111, 1000, 1001, 1010
//     4- 0000, 0001, 0010, 0011, 0100
//     5- 0000, 0001
//     6- 0000, 0001
//     7- 0000, 0001, 0010, 0011, 0100, 0101, 0111, 1000, 1001, 1010

    // console.log("Wcześniejsza ocena: ", population[1])
    tab = []
    tab.push(population[0])
    gene_to_choose = [2,3,4,5,6,7]

    var to_mutate = random_item(gene_to_choose)
    var variant_with_ten_options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var variant_with_five_options = [0, 1, 2, 3, 4]
    var variant_with_two_options = [0, 1]
    var ten_alleles = ["0000", "0001", "0010", "0011", "0100", "0101", "0111", "1000", "1001", "1010"]
    var five_alleles = ["0000", "0001", "0010", "0011", "0100"]
    var two_alleles = ["0000", "0001"]

    var splited_m = tab[0].split(" ")
    var new_gen;

    switch (to_mutate){
        case 2:
            new_gen = random_item(variant_with_ten_options)
            // console.log("Wymieniamy 2: ", splited_m[2])
            splited_m[2] = ten_alleles[new_gen]
            // console.log("na: ", splited_m[2])
            break;

        case 3:
            new_gen = random_item(variant_with_ten_options)
            // console.log("Wymieniamy 3: ", splited_m[3])
            splited_m[3] = ten_alleles[new_gen]
            // console.log("na: ", splited_m[3])
            break;

        case 4:
            new_gen = random_item(variant_with_five_options)
            // console.log("Wymieniamy 4: ", splited_m[4])
            splited_m[4] = five_alleles[new_gen]
            // console.log("na: ", splited_m[4])
            break;

        case 5:
            new_gen = random_item(variant_with_two_options)
            // console.log("Wymieniamy 5: ", splited_m[5])
            splited_m[5] = two_alleles[new_gen]
            // console.log("na: ", splited_m[5])
            break;

        case 6:
            new_gen = random_item(variant_with_two_options)
            // console.log("Wymieniamy 6: ", splited_m[6])
            splited_m[6] = two_alleles[new_gen]
            // console.log("na: ", splited_m[6])
            break;

        case 7:
            new_gen = random_item(variant_with_ten_options)
            // console.log("Wymieniamy 7: ", splited_m[7])
            splited_m[7] = ten_alleles[new_gen]
            // console.log("na: ", splited_m[7])
            break;

    }
    var mutated = splited_m[0] + " " + splited_m[1] + " " + splited_m[2] + " " + splited_m[3] + " " + splited_m[4] + " " + splited_m[5] + " " + splited_m[6] + " " + splited_m[7]
    var ocena = rating(mutated)

    // console.log("Nowa ocena: ", ocena)
    to_return = [mutated, ocena]

    // console.log("returning from mutated: ", to_return)
    return to_return
}