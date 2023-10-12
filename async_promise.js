const axios = require('axios')

const url = 'https://fakestoreapi.com/products'

//ejecutar asyncrona con promesas

axios(url)
        .then((respuesta)=>{
            let items = respuesta.data
            items.forEach(item => {
                console.log(item.title)
                console.log('------------------')
            });
        })
        .catch((error)=>{
            console.log(error.code)
        })