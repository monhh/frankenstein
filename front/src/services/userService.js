
export const forgotPassword = async (email)=>{
    const res= await fetch(`${import.meta.env.VITE_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email
        }),
    });

    const json= await res.json();

    if (json.status === 'error'){
        throw new Error(json.message);
    }

    return json.data;
};

export const ResetPassword = async (id, token, password, password2)=>{
    try{
    const res= await fetch(`${import.meta.env.VITE_BASE_URL}/reset-password/${id}/${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
            password2,
        })
    }
    );

    const json= await res.json();

    if(json.status==='error'){
        throw new Error(json.message)
    }
    return json.data
}catch (err){
    console.error(err)
}


};