const { createApp } = Vue

  createApp({
    data() {
      return {  
        autoScroll: null,
        currentImg: 0,
        
        slides: {
        
            image: [
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp',
                    ],

            title: [
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Ratchet & Clank: Rift Apart',
                    'Stray',
                    "Marvel's Avengers",
                    ],
        
            text: [
                'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',

                "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",

                'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',

                'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                ]
        }
  }
},
         //setInterval
         created(){
         this.activeInterval()
      },
         //funzioni di partenza immagini(next,prev)

     methods:{
         prevImg(){

             this.currentImg--

                 if (this.currentImg < 0 ){
                     this.currentImg = this.slides.image.length - 1;
                     }
         },
         nextImg(){
             this.currentImg++

             if(this.currentImg > this.slides.image.length - 1){
                 this.currentImg = 0
             }
         }
     },
    
}).mount('#app')