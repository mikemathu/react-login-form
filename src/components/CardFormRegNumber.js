
const CardFormRegNumber = ({onChange}) => {
    return (
        <div className="input-group mb-3">
        <input 
            className="form-control" 
            placeholder="Registration number or Staff Id" 
            type="text" 
            autoComplete='off' 
            name='regNumber'
            onChange={onChange}
        />
        <div className="input-group-append">
            <div className="input-group-text">
                <span className="fas fa-user"></span>
            </div>
        </div>
    </div>
    )
}

export default CardFormRegNumber
