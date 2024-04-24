import { useContext, useState } from "react";
import { LoggedUserContext } from "../contexts/LoggedUser";
import { PostContext } from "../contexts/PostContext";

export const Header = () => {
    /*
    const loggedUserCtx = useContext(LoggedUserContext);

    const handleLogout = () => {
        loggedUserCtx?.setName('');
    }

    return(
        <header>
            <h1 className="text-3xl">Verificar usuários</h1>
            {loggedUserCtx?.name &&
                <>
                    <p>Usuário logado: {loggedUserCtx?.name}</p>
                    <button onClick={handleLogout}>Sair</button>
                </>
            }
            {(!loggedUserCtx || loggedUserCtx.name === '') &&
                <p>Usuário desconectado</p>
            }
            
        </header>
    );*/
   
   const postCtx = useContext(PostContext);        

   const [titleInput, setTitleInput] = useState('');
   const [bodyInput, setBodyInput] = useState('');

   const handleAddButton = () => {
    if(titleInput && bodyInput){
        postCtx?.addPost(titleInput, bodyInput);
        setTitleInput('');
        setBodyInput('');
    }
   }

   return (
    <header>
        <h1 className="text-3xl">Verificar usuários</h1>

        <div className="flex flex-col gap-3 border-dotted border-gray-300 p-3 ">
            <input type="text" 
            placeholder="digite um título"
            className= "border-gray-200 p-2"
            value={titleInput}
            onChange={e => setTitleInput(e.target.value)}
            />
            <textarea
            placeholder="digite um corpo"
            className= "border-gray-200 p-2 h-24"
            value={bodyInput}
            onChange={e => setBodyInput(e.target.value)}    
            ></textarea>
            <button 
            className="bg-blue-300 p-3 text-white rounded-md"
            onClick={handleAddButton}
            >Adicionar</button>
        </div>
    </header>
   );
}

