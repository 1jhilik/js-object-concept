const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function(expences){
    this.money = this.money -expences;
    console.log('here55555', this);
    return this.money;
    }  
 }

 const heroBalam = {
     id: 102,
     money: 6000,
     name: 'Hero Balam'
 }
 const normalGolam = {
     id: 102,
     money: 6000,
     name: 'Normal Golam'
 }
 const normalTreatDey = kibria.treatDey.bind(normalGolam);
 normalTreatDey (100);
 kibria.treatDey(100);

 const heroTreatDey = kibria.treatDey.bind(heroBalam);
 heroTreatDey(500);

