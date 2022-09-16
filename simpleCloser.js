// use closer to control scope of var (like java protected var)
function parent(){
    let message = "hello world"

    function child(){
        console.log(message)
    }
    //call child
    child()
}
//call parent
parent();