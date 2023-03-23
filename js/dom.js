function main(){
    
    var btn_calcular = document.getElementById("btn_calcular")
    btn_calcular.addEventListener("click", function(){
        let nombre = document.getElementById("nombre")

        //alert('Tu nombre es:'+nombre.value)
        const resultado = document.getElementById("resultado")
        //resultado.innerText=nombre.value
        //let c = nombre.value[0]
        let n = nombre.value
        n = n.toUpperCase()
        let c = n.charAt(0)
        resultado.innerHTML="<mark>"+c+"</mark>"
    })
}

//window.load=main()
window.addEventListener("load", main)

