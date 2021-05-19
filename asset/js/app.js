const app = new Vue({
    el: '#app',
    data: {
        nuovaLista: '',
        listaSpesa: [
            'latte',
            'pane',
            'uova',
            'faria'
        ],
    },
    methods: {
        aggiungi() {
            if (!this.listaSpesa.includes(this.nuovaLista)) {

                this.listaSpesa.push(this.nuovaLista)
            } else if (this.nuovaLista.length <= 0) {
                console.log('non aggiunto nulla');
            }
            else {
                alert('prodotto già inserito')
                //console.log('gia inserito');
            }
            this.nuovaLista = ''
        },

        rimuovi(index) {
            console.log('rimozione di: ' + index);
            this.listaSpesa.splice(index, 1)
        }

    }
})