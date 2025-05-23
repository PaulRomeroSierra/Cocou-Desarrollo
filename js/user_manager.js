const active_user = {
    name: "Paul Romero",
    email: "example@gmail.com",
    contraseña: "c0¡=n%Tras3ÑAsU!pErSe#GURa1234"
}

const active_user2={
    name:"Jonathan Rossi",
    email:"rossi@gmail.com",
    contraseña:"c0¡=n%Tras3ÑAsU!pErSe#GURa12346789"
}
export const getActiveUser = () => {
    return active_user;
}
export const getActiveUser2 = () => {
    return active_user2;
}