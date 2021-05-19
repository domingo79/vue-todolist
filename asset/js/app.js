const app = new Vue({
    el: '#app',
    data: {
        nuovaLista: '',
        listaSpesa: [
            'latte',
            'pane',
            'uova',
            'farina'],
        carrello: []
    },
    methods: {

        aggiungi() {
            if (this.nuovaLista.length > 1 && !(this.listaSpesa.includes(this.nuovaLista))) {
                this.listaSpesa.push(this.nuovaLista)
            } else {
                alert('prodotto già inserito o incorretto')
            }
            this.nuovaLista = ''
        },

        rimuovi(index) {
            console.log('rimozione di: ' + index);
            this.listaSpesa.splice(index, 1)
        },
        complete(index) {
            console.log(this.listaSpesa[index]);
            this.carrello.push(this.listaSpesa[index]);
            this.listaSpesa.splice(index, 1)
        }

    }
})
