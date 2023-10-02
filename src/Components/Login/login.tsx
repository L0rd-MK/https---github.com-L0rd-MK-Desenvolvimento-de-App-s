const Login = () => {
    return (
        <div>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Endereço de E-mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Lembre-se de mim.</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
           

        </div>

    );

}

export default Login;