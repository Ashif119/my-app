type ButtonProps ={
    text: String;
    onClick?: ()=> void;

}

const Button = ({text , onClick}:ButtonProps)=>{
    return <button className="bg-blue-500" onClick={onClick}>{text}</button>
}
export default Button