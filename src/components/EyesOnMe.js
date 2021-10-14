// Code EyesOnMe Component Here
function EyesOnMe(){
    const HandleBlur = () => {
        return console.log('Hey! Eyes on me!')
        
    }
    const HandleFocus = () => {
        return console.log('Good!')
    }
    return(
        <button onBlur ={HandleBlur} onFocus = {HandleFocus}>Eyes on me</button>
    );
}

export default EyesOnMe;