
export class Input {
        constructor() {
            this.keys = []
            console.log(this.keys)
            window.addEventListener('keydown', (ev) =>{
                ev.preventDefault();
                console.log(ev.code)
                switch (ev.code) {

                        case 'ArrowRight':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;

                        case 'ArrowLeft':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;

                        case 'Enter':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;
                        case 'KeyE':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        case 'KeyD':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;
                        case 'KeyS':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                                                case 'KeyR':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;
                        case 'Space':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }

                        break;
                        
                
                    default:
                      console.log(this.keys)  
                        break;
                }

                console.log(this.keys)
            })




                window.addEventListener('keyup', (ev) =>{
                if(this.keys.indexOf(ev.code) != -1){
                    this.keys.splice(this.keys.indexOf(ev.code), 1)
                }

                console.log(this.keys)
            })
        }

   
    }

