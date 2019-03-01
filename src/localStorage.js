const saveState = (val) => {
    try{
        localStorage.setItem("state", JSON.stringify(val));
    }
    catch(err){

    }
    
}

const loadState = () => {
    try {
        const obj = localStorage.getItem('state');
        if (obj === null) {
            return undefined;
        }

        return JSON.parse(obj);

    }
    catch(err){
        return undefined;
    }
    
}

export { loadState, saveState };