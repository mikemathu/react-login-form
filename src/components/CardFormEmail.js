
const CardFormEmail = () => {
    return (
     <div className="input-group mb-3">
        <input className="form-control" placeholder="Email" type="email" autoComplete='new-email' />
        <div className="input-group-append">
            <div className="input-group-text">
                <span className="fas fa-envelope"></span>
            </div>
        </div>
    </div>
    )
}

export default CardFormEmail
