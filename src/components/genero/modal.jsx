export function Modal({genero,change,creargenero,cleargenero}){

    const handleChange = (e) => {
        change(e)
    }

    const handleSave = (e) => {
        e.preventDefault()
        creargenero()
    }

    const handleClear = () => {
        cleargenero()
    }
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Genero</h1>
                        <button onClick={handleClear} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSave}>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nombre</label>
                                <input type="text" className="form-control" id="recipient-name" name='name' value={genero.name} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Descripcion</label>
                                <textarea className="form-control" id="message-text" name='description' value={genero.description} onChange={handleChange} ></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClear} >Close</button>
                                <button type="submit" className="btn btn-primary" disabled={genero.name.length == 0}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}