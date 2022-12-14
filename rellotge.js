function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}
/*function Clock(hora=new Date().getHours()) {
    this.hora = hora;
    this.sentit = true //true: endavant; false: endarrere
    this.ref = 0; //és la referència que retorna setInterval
    this.formata = function() {
        let cad_segon = this.segon.toString();
        let cad_minut = this.minut.toString();
        let cad_hora = this.hora.toString();   
        return cad_hora + ':' + cad_minut + ':' + cad_segon;
    }
     
    this.arrenca = function() { 
        if (this.estat==false) this.estat=true;
        this.ref = setInterval(() => {
     
            this.segon++;
            if (this.segon==60) {
                this.segon = 0;
                this.minut += 1;
                if (this.minut == 60) {
                    this.minut = 0;
                    this.hour += 1;
                 }
              }
     
           }, 1000);
        };
     
        this.atura = function() {
           if (this.estat==true) this.estat=false;
           clearInterval(this.ref);
        };
     }*/

