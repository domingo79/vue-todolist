const app = new Vue({
    el: '#app',
    data: {
        nuovaLista: '',
        listaSpesa: [
            'latte',
            'pane',
            'uova',
            'farina',
            'pasta',
            'sale'
        ],
        carrello: [],
        cancellati: []
    },
    methods: {

        aggiungi() {
            if (this.nuovaLista.length > 1 && !(this.listaSpesa.includes(this.nuovaLista))) {
                this.listaSpesa.push(this.nuovaLista)
                console.log('aggiunto: ' + this.nuovaLista);
            } else {
                alert('prodotto già inserito o incorretto')
            }
            this.nuovaLista = ''
        },
        rimuovi(index) {
            this.cancellati.push(this.listaSpesa[index]);
            this.listaSpesa.splice(index, 1)
            console.log('rimozione indice: ' + index + ' rimosso: ' + this.cancellati);
        },
        cambiaValore(value, index) {
            this.listaSpesa[index] = value
            console.log(value, index);
        },
        complete(index) {
            this.carrello.push(this.listaSpesa[index]);
            console.log('completi: ' + this.carrello);
            this.listaSpesa.splice(index, 1)
        }

    }
})
