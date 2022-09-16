function parent(){
    let message ="hello world"
    // memory management 
    // same variable names
    // location of debugging error 

    function child(){
        console.log(message)
    }
    // pass fun back
    return child
}
// assign a var to the parent fun (like instiating an obj)
let childFunction = parent()
childFunction()
