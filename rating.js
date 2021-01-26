function rating(data){
    result = 0
    var splited = data.split(" ");

    // jesli kolor nog jest rowny kolorowi blatu +1
    if(splited[2] == splited[3]){
        result += 2
        // console.log("1. jesli kolor nog jest rowny kolorowi blatu +1 ", splited[2], splited[3])
    }

    // w przypadku duzego blatu: za grube nogi +1, za cienkie -1, za wysokie nogi +1
    if(splited[4] == "0010"){
        if(splited[6] == "0000"){
            result += 3
            // console.log("2. w przypadku duzego blatu: za grube nogi +1 ", splited[4], splited[6])
        }
        if(splited[6] == "0001"){
            result -= 1
            // console.log("3. w przypadku duzego blatu: za cienkie nogi -1 ", splited[4], splited[6])
        }
        if(splited[7] == "0100" || splited[7] == "0101" || splited[7] == "0111" || splited[7] == "1000" || splited[7] == "1001" || splited[7] == "1010"){
            result += 2
            // console.log("4. w przypadku duzego blatu: za wysokie nogi +1 ", splited[4], splited[7])
        }
    }

    // w przypadku małego blatu: nogi cienkie +1, nogi bardzo długie -1, blat cienki +1, blat gruby -1
    if(splited[4] == "0000" || splited[4] == "0001" || splited[4] == "0011"){
        if(splited[6] == "0001") {
            result += 3
            // console.log("5. w przypadku małego blatu: nogi cienkie +1 ", splited[4], splited[6])
        }
        if(splited[7] == "1000" || splited[7] == "1001" || splited[7] == "1010") {
            result -= 1
            // console.log("6. w przypadku małego blatu: nogi bardzo długie -1 ", splited[4], splited[7])
        }
        if(splited[5] == "0001") {
            result += 3
            // console.log("7. w przypadku małego blatu: blat cienki +1 ", splited[4], splited[5])
        }
        if(splited[5] == "0000") {
            result -= 1
            // console.log("8. w przypadku małego blatu: blat gruby -1 ", splited[4], splited[5])
        }
    }

    // w przypadku wysokich nog: nogi grube +1
    if(splited[7] == "1000" || splited[7] == "1001" || splited[7] == "1010"){
        if(splited[6] == "0000"){
            result += 1
            // console.log("9. w przypadku wysokich nog: nogi grube +1", splited[7], splited[6])
        }
    }

    // blat ktory nie jest kwadratem +1
    if(splited[4] == "0001" || splited[4] == "0011" || splited[4] == "0100"){
        result += 2
        // console.log("10. blat ktory nie jest kwadratem +1", splited[4])
    }

    // gruby blat: grube nogi +1, cienkie nogi -1
    if(splited[5] == "0000"){
        if(splited[6] == "0000"){
            result += 3
            // console.log("11. gruby blat: grube nogi +1", splited[5], splited[6])
        }
        if(splited[6] == "0001"){
            result += 1
            // console.log("12. gruby blat: cienkie nogi -1", splited[5], splited[6])
        }
    }

    // jak zawiera ciemny kolor +1
    if(splited[2] == "0001" || splited[3] == "0010" || splited[3] == "0011" || splited[3] == "1010"){
        result += 2
        // console.log("13. ciemny blat +1")
    }
    if(splited[3] == "0001" || splited[3] == "0010" || splited[3] == "0011" || splited[3] == "1010"){
        result += 2
        // console.log("14. ciemne nogi +1")
    }

    if(result<=0){
        result=0;
    }
    return result
}