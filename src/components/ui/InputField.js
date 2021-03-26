const InputField = (props) => {
    return (
        <div className="input">
            <label>{props.label}</label>
            <div>
                <input 
                    type={props.type}
                    value={props.value}
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                    onChange={ (e) => props.onChange(e) }
                    required=""/>
            </div>
        </div>
    );
};

InputField.defaultProps = {
    type: "text",
    value: "",
    name: "",
    id: "",
    placeholder: ""
}

export default InputField;