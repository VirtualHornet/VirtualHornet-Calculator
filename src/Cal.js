import React,{useState} from 'react';
import './App.css'
import './index.css'

export default (props) =>{

    const [result, setResult]=useState();
    const [value, setValue]=useState();
    const [value2, setValue2] = useState();
    const [operation, setOperation] = useState("");

    const setAdd = ()=>{
        setOperation("+");
        outcome("+");
    };
    const setSub = ()=>{
        setOperation("-");
        outcome("-");
    };
    const setMul = ()=>{
        setOperation("*");
        outcome("*");
    };
    const setDiv = ()=>{
        setOperation("/");
        outcome("/");
    };

    const outcome =(val) =>{
        if(val === "*"){
            setResult(value * value2)
        }else if( val === "/"){
            setResult(value / value2)
        }else if(val === "+"){
            setResult(parseInt(value)+parseInt(value2))
        }else if(val === "-"){
            setResult(value-value2)
        }
    }



  


    return(
        <div className='content'>
            <form className='form'>
                <label className='text'>
                     First number:
                <input 
                    type="number"
                    name="number1"
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}/>
                </label>
            </form>
            <form className='form'>
                <label className='text'>
                    Second number:
                    <input
                        type="number"
                        name="number2"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                    />
            
                </label>

            </form>


            <button className='button' onClick={setAdd} type='button'>+</button>
            <button className='button' onClick={setSub} type='button'>-</button>
            <button className='button' onClick={setMul} type='button'>*</button>
            <button className='button' onClick={setDiv} type='button'>/</button>
            <p>{(operation==="")?"Result:":"Result:"+parseInt(value)+ operation+ parseInt(value2) +"="+ result}</p>
        </div>
    );

}
