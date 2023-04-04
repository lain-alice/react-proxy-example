const CreateTodo = ({ onChangeForm, handleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>todo</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="book" 
                            placeholder="book" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>isComplete</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="author"
                            placeholder="author" 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;