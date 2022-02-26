const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function(expences, tips, tax){
    this.money = this.money -expences -tips - tax;
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
//  //call
//  kibria.treatDey.call(heroBalam, 500, 100, 50);
//  kibria.treatDey.call(heroBalam, 300, 50, 30);
kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 100]);
kibria.treatDey.apply(normalGolam, [700, 200, 70]);
