var app = new Vue({
  el: '#app',
  data: () => ({
      values: {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: '',
      },
      current: 'X',
      showModal: false,
      mensaje: '',
      posiciones: [],
      btn_regresarUno: true
  }),
  methods:{
      play(key){
        this.posiciones.unshift(key)
          if(! this.values[key]) {
              this.values[key] = this.current
              this.current  = (this.current === 'X' ? 'O' : 'X')
          }
      },
      reset(){
        this.values = {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: '',
        },
        this.current = 'X',
        this.showModal= false,
        this.mensaje= '',
        this.posiciones= [],
        this.btn_regresarUno = true
    },
    toggleModal(){
      this.showModal = !this.showModal;
      if (this.showModal == false){
        this.reset()
      }
    },
    result(){
      if( this.values[1] !== '' && this.values[2] !== '' && this.values[3] !== '' &&  this.values[1] === this.values[2] &&  this.values[2] === this.values[3]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      }else if( this.values[4] !== '' && this.values[5] !== '' && this.values[6] !== '' &&  this.values[4] === this.values[5] &&  this.values[5] === this.values[6]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[7] !== '' && this.values[8] !== '' && this.values[9] !== '' &&  this.values[7] === this.values[8] &&  this.values[8] === this.values[9]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[1] !== '' && this.values[4] !== '' && this.values[7] !== '' &&  this.values[1] === this.values[4] &&  this.values[4] === this.values[7]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[2] !== '' && this.values[5] !== '' && this.values[8] !== '' &&  this.values[2] === this.values[5] &&  this.values[5] === this.values[8]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[3] !== '' && this.values[6] !== '' && this.values[9] !== '' &&  this.values[3] === this.values[6] &&  this.values[6] === this.values[9]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[1] !== '' && this.values[5] !== '' && this.values[9] !== '' &&  this.values[1] === this.values[5] &&  this.values[5] === this.values[9]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[3] !== '' && this.values[5] !== '' && this.values[7] !== '' &&  this.values[3] === this.values[5] &&  this.values[5] === this.values[7]){
        this.mensaje ="¡Felicitaciones! Has ganado."
        this.toggleModal()
      } else if( this.values[1] !== '' && this.values[2] !== '' && this.values[3] !== '' && this.values[4] !== '' && this.values[5] !== '' && this.values[6] !== '' && this.values[7] !== '' && this.values[8] !== '' && this.values[9] !== '' ){
        this.mensaje ="¡El juego termino! "
        this.toggleModal()
      }
    },
    playComputer(){
      const posicion = Math.floor(Math.random()*9)+1
      if(this.values[posicion] === ''){
        this.play(posicion)
        this.sound()
        this.result()
      }else{
        this.playComputer()
      }
    },
    sound(){
      let url = ''
      this.current === 'X' ? url = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" : url = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"; 
      let audio = new Audio(url);
      audio.play()
    },
    regresar(){
      if(this.posiciones.length !== 0 ){
        this.values[this.posiciones[0]] = ''
        this.posiciones.shift()
      }      
    },
    regresarUno(){
      if(this.posiciones.length !== 0 ){
        this.values[this.posiciones[0]] = ''
        this.posiciones.shift(),
        this.btn_regresarUno = false
      }      
    }
  }
})
