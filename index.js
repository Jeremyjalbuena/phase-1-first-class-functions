function receivesAFunction(callback){
   callback();

}
function returnsANamedFunction() {
    return function food(){
        console.log("friedchicken")
    }
  
  }

function returnsAnAnonymousFunction(){
    return function(){
        console.log("whats for dinner")
    }
}