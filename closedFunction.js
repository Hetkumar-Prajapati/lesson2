function closedFunction(){
    let counter =1;
    
    let increment= () =>{
        console.log(counter)
        counter++
    }
    
    // console.log('assign)  only runs once for 2 myfunctions 
    return increment
}

let myFunction = closedFunction()

myFunction() // output:  1
myFunction() //          2