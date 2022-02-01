import "../assets/styles/Checkbox.css"

const Checkbox = ({checkboxName}) => {
    return (
        <div className="checkbox">
            <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <span>{checkboxName}</span>
        </div>
    )
}

export default Checkbox;