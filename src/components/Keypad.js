// Code Keypad Component Here
function Keypad(){
    function Handler(event){
        console.log('Entering password...')
        
    }
    return(
        <input 
        type='password' 
        name ='number'
        onChange = {Handler}
        >
        
        </input>
    );
}

export default Keypad;