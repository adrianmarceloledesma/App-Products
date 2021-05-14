class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}


class UI{
    addProduct(product){
        const productList = document.getElementById('contenedor-texto')
        const element = document.createElement('div')
        element.innerHTML = 
        `<strong>Product Name: </strong> ${product.name}
        <strong>Product Price: </strong> $ ${product.price}
        <strong>Product Year: </strong> ${product.year}
        <input type="button" value="Delete" name="delete" id="btn-delete" class="btn-delete">
        `

        productList.appendChild(element)

        this.resetForm()
    }
    resetForm(){
        document.getElementById('product-form').reset()
      
    }
    deleteProduct(e){
        if(e.name === 'delete'){
            e.parentElement.remove() 
                                
            this.showMessage('Element deleted successfuly', 'bad')
        }        
    }
    showMessage(message, goodOrBad){
        const div = document.createElement('div')
        div.className = goodOrBad
        div.appendChild(document.createTextNode(message))

        const container = document.getElementById('container')
        const contenedorForm = document.getElementById('contenedor-form')
        container.insertBefore(div, contenedorForm)
        setTimeout(function(){
            div.remove()
        },2000)
      
    }
}


// DOM events
document.getElementById('product-form').onsubmit = function(e){
    e.preventDefault()
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value

    const product = new Product(name, price, year)
    const ui = new UI()
 
    if(name=='' || price == '' || year == ''){
        return ui.showMessage('Please Complete the Form', 'warning')
    }
    ui.addProduct(product)
    ui.showMessage('Product added successfully', 'good')
}

document.getElementById("contenedor-texto").onclick = function(e){
    const ui = new UI()
    ui.deleteProduct(e.target)
}