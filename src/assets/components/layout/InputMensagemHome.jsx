export default function InputMensagemHome({type, name, placeholer}){
    return(
        <div>
            <input className=""
            type={type} 
            name={name}
            id={name}
            placeholder={placeholer}
            />
        </div>
    )
} 