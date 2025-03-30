function createFunctionRegistry()
{
    const functions={};
    

    return
    {
        //register the functions
        registerFunction(functionName,fn)
        {
            functions.name=functionName;
        }

        //execute the function
        executeFunction(functionName,arguments,context=null)
        {
            functions.apply();
        }

        //transform data
        mapFunction(fnName,dataArray)
        {
            return dataArray.map(fn=>dataArray.executeFunction());
        }

        //filter function
        filterFunction(fnNmae,dataArray)
        {
            return dataArray.filter(fn=>dataArray.executefunction()==true);
        }

        //reduce Function
        reduceFunction(fnNmae,dataArray,initialValue)
        {
            return dataArray.reduce((acc,cur)=>fn.executeFunction(),0);
        }

        // asynchronous execution
        executeFunctionAsync(fnName,arguments,  delay)
        {
            return new Promise(resolve)=>{
                setTimeout=(()=>{resolve(excecuteAsync);},1000);
            }

        }

    }
    //export
    function exportRegistry()
    {
        return functions.JSON.stringify();
    }
}

createFunctionRegistry();