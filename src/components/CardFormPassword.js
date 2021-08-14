
const CardFormPassword = () => {
    return (
        <>
        <div className="input-group mb-3">
            <input className="form-control" placeholder="Password" type="password" autoComplete='new-password' />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                </div>
            </div>
        </div>

        {/* <div className="input-group mb-3">
                <input className="form-control" placeholder="Retype password" type="password" />
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                    </div>
                </div>
            </div> */}
            </>
    
    )
}

export default CardFormPassword
