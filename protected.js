const email = sessionStorage.getItem('email');
console.log(email)

if (!email) {
    window.location.href = './pages/signin.html'
}

if (email) {
    const signIn = document.getElementById('signin');
    signIn.innerText = 'Logout';
}

const logout = () => {
    sessionStorage.removeItem('email');
}