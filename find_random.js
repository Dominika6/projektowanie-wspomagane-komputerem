
function find_random(){
    var random_table = "";

    const t_table_top_shape = ["0001 "];
    const random_table_top_shape = Math.floor(Math.random() * t_table_top_shape.length);
    random_table += t_table_top_shape[random_table_top_shape];

    const t_legs_number = ["0010 "];
    const random_legs_number = Math.floor(Math.random() * t_legs_number.length);
    random_table += t_legs_number[random_legs_number];

    const t_table_top_color = ["0000 ", "0001 ", "0010 ", "0011 ", "0100 ", "0101 ", "0111 ", "1000 ", "1001 ", "1010 "];
    const random_table_top_color = Math.floor(Math.random() * t_table_top_color.length);
    random_table += t_table_top_color[random_table_top_color];
    // console.log("table_top_color: ", random_table_top_color, t_table_top_color[random_table_top_color]);


    const t_legs_color = ["0000 ", "0001 ", "0010 ", "0011 ", "0100 ", "0101 ", "0111 ", "1000 ", "1001 ", "1010 "];
    const random_legs_color = Math.floor(Math.random() * t_legs_color.length);
    random_table += t_legs_color[random_legs_color];
    // console.log("legs_color: ", random_legs_color, t_legs_color[random_legs_color]);


    const t_table_top_size = ["0000 ", "0001 ", "0010 ", "0011 ", "0100 "];
    const random_table_top_size = Math.floor(Math.random() * t_table_top_size.length);
    random_table += t_table_top_size[random_table_top_size];
    // console.log("table_top_size: ", random_table_top_size, t_table_top_size[random_table_top_size]);


    const t_table_top_thickness = ["0000 ", "0001 "];
    const random_table_top_thickness = Math.floor(Math.random() * t_table_top_thickness.length);
    random_table += t_table_top_thickness[random_table_top_thickness];
    // console.log("table_top_thickness: ", random_table_top_thickness, t_table_top_thickness[random_table_top_thickness]);


    const t_legs_thickness = ["0000 ", "0001 "];
    const random_legs_thickness = Math.floor(Math.random() * t_legs_thickness.length);
    random_table += t_legs_thickness[random_legs_thickness];
    // console.log("legs_thickness: ", random_legs_thickness, t_legs_thickness[random_legs_thickness]);


    const t_legs_height = ["0000 ", "0001 ", "0010 ", "0011 ", "0100 ", "0101 ", "0111 ", "1000 ", "1001 ", "1010 "];
    const random_legs_height = Math.floor(Math.random() * t_legs_height.length);
    random_table += t_legs_height[random_legs_height];
    // console.log("legs_height: ", random_legs_height, t_legs_height[random_legs_height]);


    return random_table;
}