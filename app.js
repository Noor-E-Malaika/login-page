
const signIn = () => {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    if (email === 'abc@yopmail.com' && password === '123456')
    {
        sessionStorage.setItem('email', email);
        window.location.href = '../index.html';
    }
}
