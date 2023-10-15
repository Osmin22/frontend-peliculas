export function Modal({productora,change,crearproductora,clearproductora}){

    const handleChange = (e) => {
        change(e)
    }
    
    const handleSave = (e) => {
        e.preventDefault()
        crearproductora()
    }

    const handleClear = () => {
        clearproductora()
    }

    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo(a) productor</h1>
                        <button onClick={handleClear} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSave}>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nombre</label>
                                <input type="text" className="form-control" id="recipient-name" name='name' value={productora.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">sloga</label>
                                <textarea className="form-control" id="message-text" name='description' value={productora.sloga} onChange={handleChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Descripcion</label>
                                <textarea className="form-control" id="message-text" name='description' value={productora.description} onChange={handleChange}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClear}>Close</button>
                                <button type="button" className="btn btn-primary" disabled={productora.name==0}>Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}