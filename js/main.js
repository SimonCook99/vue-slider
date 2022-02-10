const app = new Vue({

    el: "#root",
    data: {
        items: [
            {
                url:'img/01.jpg',
                name:'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url:'img/02.jpg',
                name:'Svizzera',
                text:'Lorem ipsum'
            },
            {
                url:'img/03.jpg',
                name:'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url:'img/04.jpg',
                name:'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                url:'img/05.jpg',
                name:'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],

        active: 0,
        clock: ""
    },
    methods: {
        //funzione del bottone che scorre alla slide precedente
        previousSlide(){
            if(this.active == 0){
                this.active = this.items.length - 1;
            }else{
                this.active--;
            }
        },
        //funzione del bottone che scorre alla slide successiva
        nextSlide(){
            if(this.active == this.items.length - 1){
                this.active = 0;
            }else{
                this.active++;
            }
        },
        SlideShow(){ //funzione che fa partire lo slideshow, chiamando la funzione nextslide ogni 3 secondi
            this.clock = setInterval(this.nextSlide, 3000);
        },
        StopSlideShow(){ //funzione che ferma lo slideshow, quando l'utente passa il mouse sull'immagine principale
            clearInterval(this.clock);
        },
        switchThumb(index){
            this.active = index;
        }
        
    },
    //metodo che viene chiamato da Vue appena viene caricata la pagina
    beforeMount(){
        this.SlideShow();
    }
});

