const InputField = (props) => {
    return (
        <div className={props.className}>
            <label>{props.label} :</label>
            <div>
                <input id={props.name} type={props.inputType} 
                    name={props.name}
                    placeholder={props.inputPlaceholder}
                    onChange={(e) => props.onChange({   
                        value: props.inputType === "number" ? parseInt(e.target.value) : e.target.value,
                        key: props.name 
                    })}/>
            </div>
        </div>
    );
}

InputField.defaultProps = {
    id: "input",
    name: "input",
    className: "input",
    label: "",
    inputType: "",
    onChange: (data) => { console.log(data); }
}

export default InputField;