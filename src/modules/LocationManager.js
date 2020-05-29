const remoteURL = "http://localhost:5002/locations"

export default {
  get(id) {
    console.log("get works!")
    return fetch(`${remoteURL}/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/${id}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' }
    }).then(data => data.json())
  }
}