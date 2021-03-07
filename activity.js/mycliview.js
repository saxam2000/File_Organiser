let input = process.argv.slice(2);
// node mycli.js view<dirname> tree
// node mycli.js view<dirname> flat
// node mycli.js organize<dirname>
// node mycli.js help
let cmd = input[0];
switch (cmd) {
    case "view":
        console.log("view command implemented");
        break;
    case "organize":
        console.log("organize command implemented");
        break;
    case "help":
        console.log(`List of all commands are  :
            1.node mycli.js view<dirname> tree
            2.node mycli.js view<dirname> flat
            3. node mycli.js organize<dirname>
            `);
        break;

    default:
        console.log("Ooops.....   wrong  command entered");
}