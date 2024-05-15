import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import { Navigate } from "react-router-dom";

import NewQuestionForm from "../../forms/QuestionsForms/NewQuestionForm";

import {insertQuestionService} from "../../services/questionService.js"



const NewQuestionPage=()=>{
    
    const {user, token}= useContext(AuthContext);
    console.log(token);

    if(!token){
     
        return <Navigate to='/login'/>;
    }
    
    return(
        <main>
            <h2 >Nueva pregunta</h2>
            <NewQuestionForm
                insertQuestionService={insertQuestionService}
                token={token}
            />

                
        </main>
    )
}

export default NewQuestionPage;