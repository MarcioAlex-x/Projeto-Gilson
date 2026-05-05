
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js"
import { db } from "./firebaseconfig.js"

const nome = document.querySelector('.nome')
const serie = document.querySelector('.serie')
const turma = document.querySelector('.turma')
const enviar = document.querySelector('.enviar')
const msg = document.querySelector('.msg')

enviar.addEventListener('click',(e)=>{
    e.preventDefault()
    msg.innerHTML = 'Carregando'

    const createItem = async ()=>{
        try {
            
            
            const docRef = await addDoc(collection (db,'teste'),{
                nome:nome.value,
                serie:serie.value,
                turma:turma.value
            })
            console.log('Dados enviados')
    
        } catch (err) {
            console.error(err.message)
        }finally{
            console.log('Acabou')
            nome.value = ''
            serie.value = ''
            turma.value = ''
            msg.innerHTML = ''
        }
    }
    
    createItem()
})

console.log('Alex')
