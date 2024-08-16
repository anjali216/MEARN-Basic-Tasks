function processArguments(...args){
    if(args.length ===0){
        //No arguments passed
      console.log('No arguments provided.');
    }else if(args.length===1){
     //Single arguments passed
     console.log('One argument:',args[0]);
    }else{
        //Multiple arguments passed
        console.log('Multiple arguments:',args);
    }
}

//Usage examples
processArguments(); //No arguments provided
processArguments(10);
processArguments('apple','orange','banana');