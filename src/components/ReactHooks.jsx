function ReactHooks(){
    
        let hooks=["useState","useEffect","useRef","useMemo","useCallback","useNavigation","useContext","useReducer"];
        return(
        <div>
            <h1>ReactHooks</h1>
            <h3>React hooks are special function provided by react to make developers job easier</h3>
            <ul>
                {hooks.map((items,index)=>{
                return (
                    <li key={index}>{items}</li>
                )
            })}
                
                
            </ul>

        </div>
    );
}
export default ReactHooks;