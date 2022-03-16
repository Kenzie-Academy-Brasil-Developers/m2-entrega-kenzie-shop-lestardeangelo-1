class Dados {

    static getApi() {
        return fetch('https://m2-kenzie-shop.herokuapp.com/products').then(response => response.json())
    }
}

export default Dados