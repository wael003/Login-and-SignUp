const urlBase = "http://localhost:3000";

async function addUser(user) {
    const response = await fetch(`${urlBase}/User`, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(user)
    });
    return response;
    
}
// async function updateNote(note) {
//     const response = await fetch(urlBase + "/notes", {
//         method : "PUT",
//         headers : {"Content-Type" : "application/json"},
//         body : JSON.stringify(note)
//     });
//     return response;
    
// }
// async function deleteNote(noteId) {
//     const response = await fetch(urlBase + "/notes/"+noteId, {
//         method : "DELETE",
        
//     });
//     return response;
    
// }
async function getPasswordByEmail(emailUser) {
    let url = `${urlBase}/User/${emailUser}`;
    let response = await fetch(url ,{
        method : "GET"
    });
    return response.json();
    
}
// async function getNote(titleNote) {
//     let url = urlBase+"/notes";
//     if(titleNote){
//         url += "/?title=" + titleNote;
//     }
//     const response = await fetch(url, {
//     });
//     return response.json();
    
// }