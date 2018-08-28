"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function updatePerson(items) {
    return {
        type: "UPDATE_PERSON",
        items: items
    };
}
exports.updatePerson = updatePerson;
function changePerson(id, name, phone, email) {
    return function (dispatch) {
        fetch("http://localhost:8888/counterparties/changePerson", {
            method: "post",
            headers: {
                "date": "Sun, 20 Aug 2017 18:12:45 GMT",
                "transfer-encoding": "chunked",
                "content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                email: email,
                id: id,
                name: name,
                phone: phone
            })
        })
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
            .then(function () {
            fetch(config_1.getConterparties)
                .then(function (response) { return response.json(); })
                .then(function (items) { return dispatch(updatePerson(items.value)); });
        })
            .catch(function (response) { alert("Ошибка заполнения полей"); return; });
    };
}
exports.changePerson = changePerson;
function updateEntity(items) {
    return {
        type: "UPDATE_ENTITY",
        items: items
    };
}
exports.updateEntity = updateEntity;
function changeEntity(id_counter, id_legal) {
    return function (dispatch) {
        fetch("http://localhost:8888/counterparties/changeLegalEntity/" + id_counter + "/" + id_legal, {
            method: "post"
        })
            .then(function () {
            fetch(config_1.getConterparties)
                .then(function (response) { return response.json(); })
                .then(function (items) { return dispatch(updateEntity(items.value)); });
        });
    };
}
exports.changeEntity = changeEntity;
function addContact(items) {
    return {
        type: "ADD_CONTACT",
        items: items
    };
}
exports.addContact = addContact;
function addPerson(id, name, phone, email) {
    return function (dispatch) {
        fetch("http://localhost:8888/counterparties/addContactPerson/" + id, {
            method: "post",
            headers: {
                "date": "Sun, 20 Aug 2017 18:12:45 GMT",
                "transfer-encoding": "chunked",
                "content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                email: email,
                name: name,
                phone: phone
            })
        })
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
            .then(function () {
            fetch(config_1.getConterparties)
                .then(function (response) { return response.json(); })
                .then(function (items) { return dispatch(addContact(items.value)); });
        })
            .catch(function (response) { alert("Ошибка заполнения полей"); return; });
    };
}
exports.addPerson = addPerson;
function deleteContact(items) {
    return {
        type: "DELETE_CONTACT",
        items: items
    };
}
exports.deleteContact = deleteContact;
function deletePerson(id_counter, id_contact) {
    return function (dispatch) {
        fetch("http://localhost:8888/counterparties/deleteContactPerson/" + id_counter + "/" + id_contact, {
            method: "delete"
        });
    };
}
exports.deletePerson = deletePerson;
//# sourceMappingURL=editing.js.map