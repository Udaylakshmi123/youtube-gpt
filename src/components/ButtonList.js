import Button from "./Button";

const ButtonList = ()=>{
    const buttonList = ['All','Gaming','Songs','Videos','Live','Cricket'];
    return <div className="flex">
       {buttonList.map(button => <Button key={button} name={button}/>)};
    </div>
    }
    export default ButtonList;