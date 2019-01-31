// Requests

const BASE_URL = `http://localhost:3000/api/v1`;

export const Question = {
    all() {
        return fetch(`${BASE_URL}/questions`, {credentials: "include"}).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/questions/${id}`, {credentials: "include"}).then(res => res.json());
    },
    create(params) {
        return fetch(
            `${BASE_URL}/questions`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

export const Session = {
    create(params) {
        return fetch(
            `${BASE_URL}/session`, {
                method: "POST",
                credentials: "include",
                // To include the cookie when doing a fetch, use the
                // "credentials" option with the value "include" for
                // cross-origin requests or with the value "same-origin"
                // for requests on the same origin.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy(){
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
            credentials: "include",
        }).then(res => res.json());
    }
}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            credentials: "include"
        }).then(res => res.json());
    }
}