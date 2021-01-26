
function translation(data){
    var splited = data.split(" ");

    switch (splited[0]){
        case "0001":
            table_top_shape = "rectangle";
            break;
    }

    switch (splited[1]){
        case "0010":
            legs_number = 4;
            break;
    }

    switch (splited[2]){
        case "0000":
            table_top_color = 0x86592d;
            break;
        case "0001":
            table_top_color = 0x331a00;
            break;
        case "0010":
            table_top_color = 0x1a3300;
            break;
        case "0011":
            table_top_color = 0x001a00;
            break;
        case "0100":
            table_top_color = 0x4d4d33;
            break;
        case "0101":
            table_top_color = 0xd6d6c2;
            break;
        case "0111":
            table_top_color = 0xcc9900;
            break;
        case "1000":
            table_top_color = 0x4d1919;
            break;
        case "1001":
            table_top_color = 0x50351b;
            break;
        case "1010":
            table_top_color = 0x1a0d01;
            break;

    }

    switch (splited[3]){
        case "0000":
            // jasny braz
            legs_color = 0x86592d;
            break;
        case "0001":
            // ciemny braz
            legs_color = 0x331a00;
            break;
        case "0010":
            //ciemna zieleń
            legs_color = 0x1a3300;
            break;
        case "0011":
            //bardzo ciemna zieleń
            legs_color = 0x001a00;
            break;
        case "0100":
            // szary z odcieniem zieleni
            legs_color = 0x4d4d33;
            break;
        case "0101":
            // jasno szary
            legs_color = 0xd6d6c2;
            break;
        case "0111":
            // musztardowy
            legs_color = 0xcc9900;
            break;
        case "1000":
            // coś a'la bordo
            legs_color = 0x4d1919;
            break;
        case "1001":
            // brąz
            legs_color = 0x50351b;
            break;
        case "1010":
            //ciemny braz wenge
            legs_color = 0x1a0d01;
            break;
    }

    switch (splited[4]){
        case "0000":
            table_top_size = [10, 10];
            break;
        case "0001":
            table_top_size = [10, 20];
            break;
        case "0010":
            table_top_size = [20, 20];
            break;
        case "0011":
            table_top_size = [10, 15];
            break;
        case "0100":
            table_top_size = [15, 20];
            break;
    }

    switch (splited[5]){
        case "0000":
            table_top_thickness = 1;
            break;
        case "0001":
            table_top_thickness = 0.5;
            break;
    }

    switch (splited[6]){
        case "0000":
            legs_thickness = 1;
            break;
        case "0001":
            legs_thickness = 0.5;
            break;
    }

    switch (splited[7]) {
        case "0000":
            legs_height = 4;
            break;
        case "0001":
            legs_height = 6;
            break;
        case "0010":
            legs_height = 8;
            break;
        case "0011":
            legs_height = 10;
            break;
        case "0100":
            legs_height = 12;
            break;
        case "0101":
            legs_height = 14;
            break;
        case "0111":
            legs_height = 16;
            break;
        case "1000":
            legs_height = 18;
            break;
        case "1001":
            legs_height = 20;
            break;
        case "1010":
            legs_height = 22;
            break;
    }


    return (table_top_shape, legs_number, table_top_color, legs_color, table_top_size, table_top_thickness, legs_thickness, legs_height)
}
