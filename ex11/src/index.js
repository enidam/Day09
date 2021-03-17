function switchCase(val) {
    var animals = "";

    switch (val) {
        case "a":
            animals = "antilope";
            
        case "b":
            animals = "bird";
           
        case "c":
            animals = "cat";
           
        case "d":
            animals = "stuff";
            break
       


    }
    return animals
};

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));


module.exports = switchCase;