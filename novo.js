let number = 0

let tempo = window.setInterval( comecar , 1000 )
function comecar()
                    {
                        number++ 
                        aparecer()       
                    }

function aparecer()
                    {
                        const p = document.querySelector("#mostrador")
                        p.innerText = number
                    }
         aparecer()
function parar()    {   
                        clearInterval(tempo)
                    }
function iniciar()  
                    {
                        comecar()
                         tempo = window.setInterval( comecar , 1000 )      
                    }
function reinicio()
                    {
                     number = 0    
                    }

