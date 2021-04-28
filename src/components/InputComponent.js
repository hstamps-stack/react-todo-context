const InputComponent = () =>{


    return(
    <div className="row">
            <form className="mx-auto my-5 col-6"
                // onSubmit ={}
            >
                <div className ="form-group">
                    <div className="input-group">
                        <input type="text" 
                            className="form-control"
                            placeholder="" aria-label=""
                            aria-describedby="basic-addon1"
                            // value = {}
                            // onChange = {}
                        />     
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" 
                                type="submit"
                                // onClick = {}
                                >
                                    Add
                            </button>
                        </div>
                    </div>    
                </div>
            </form>
        </div>
    )
} 

export default InputComponent;