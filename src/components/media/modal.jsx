export function Modal({media,change}){

    const handleChange = (e) => {
        change(e)
    }

    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva pelicula</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nombre</label>
                                <input type="text" className="form-control" id="recipient-name" name='name' value={media.name} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">sloga</label>
                                <textarea className="form-control" id="message-text" name='sloga' value={media.sloga} onChange={handleChange} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Descripcion</label>
                                <textarea className="form-control" id="message-text" name='description' value={media.description} onChange={handleChange}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" >Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}