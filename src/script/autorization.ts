import "core-js/stable";
import "regenerator-runtime/runtime";
import { bodySignUp } from './types';
import { bodySignIn } from './types';
import { DOM } from './dom'
checkToken();
async function sendRequest(method: string, url: string, body: bodySignUp) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    });
    return response.json();
};
export async function modal() {
    showMessage();
    async function showMessage() {
        const bodySignUp = {
            password: DOM.password.value,
            login: DOM.login.value,
            first_name: DOM.firstname.value,
            last_name: DOM.surname.value
        };
        const data = await sendRequest('POST', DOM.requestURl, bodySignUp)
        console.log(data)
        checkResponse(data, bodySignUp)
    }
}
async function checkResponse(data: any, bodySignUp: bodySignUp) {
    switch (true) {
        case (data.message === "Registration successful"): {
            DOM.wrapUp.classList.add("hidden"),
                DOM.wrapIn.classList.remove("hidden")
        }
        case (data.message === `User with login ${bodySignUp.login} already exist`): {
            console.log(data.message)
            DOM.outputUp.innerHTML = data.message;
        }
        case (data.password): {
            DOM.outputUp.innerHTML = data.password;
        }
        case (data.first_name): {
            DOM.outputUp.innerHTML = data.first_name;
        }
        case (data.last_name): {
            DOM.outputUp.innerHTML = data.last_name;
        }
        default: {
            DOM.outputUp.innerHTML = "Invalid data";
        }
    }
    // if (data.message === "Registration successful") {
    //     DOM.outputUp.innerHTML = data.message,
    //         DOM.wrapperIn.classList.remove("hidden"),
    //         DOM.wrapperUp.classList.add("hidden")
    // } else if (data.message === `User with login ${bodySignUp.login} already exist`) {
    //     DOM.outputUp.innerHTML = data.message
    // } else if (data.password) {
    //     DOM.outputUp.innerHTML = data.password
    // } else if (data.first_name) {
    //     DOM.outputUp.innerHTML = data.first_name
    // } else if (data.last_name) {
    //     DOM.outputUp.innerHTML = data.last_name
    // }
}
function checkToken() {
    if (!localStorage.getItem('token')) {
        DOM.wrapRegistr.classList.remove("hidden")
        DOM.filmsArea.classList.add("hidden")
        DOM.navigationRight.classList.add("hidden")
    } else {
        DOM.wrapRegistr.classList.add("hidden")
        DOM.filmsArea.classList.remove("hidden")
        DOM.navigationRight.classList.remove("hidden")

    }

};
async function sendRequestSignIn(method: string, url: string, body: bodySignIn) {
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers
        });
        const data = await response.json()
        if (data.userId) {
            return data;
        } else {
            throw new Error()
        }
    } catch (error) {
        return -1
    }
}
export async function signIn() {
    const bodySignIn = {
        login: DOM.username.value,
        password: DOM.userpass.value
    }
    const result = await sendRequestSignIn('POST', DOM.requestURlsignIn, bodySignIn);
    if (result === -1) {
        DOM.outputIn.innerHTML = "Invalid password or username"
    } else {
        localStorage.setItem('token', JSON.stringify(result))
    }
    checkToken()
};
export function toSignUp() {
    DOM.wrapIn.classList.remove("hidden")
    DOM.wrapUp.classList.add("hidden")
};
export function toSignIn() {
    DOM.wrapIn.classList.add("hidden")
    DOM.wrapUp.classList.remove("hidden")
};
export function signOut() {
    localStorage.removeItem('token');
    checkToken();
};