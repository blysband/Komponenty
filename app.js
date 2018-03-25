angular.module('myApp', [])
.controller('studenciCtrl', function() {
  this.studenci=[
	{
    imie: "Ala",
    nazwisko: "Makota",
    wiek:23,
    oceny: [2,3,4,5]
  },
	{
    imie: "Zosia",
    nazwisko: "Samosia",
    wiek:20,
    oceny: [2,3,4]
  },
  {
    imie: "Asia",
    nazwisko: "Bezocen",
    oceny: []
  }
  ];
  this.average = function(student) {
    let suma=0;
      for(let i = 0;i<student.oceny.length;++i) {
        suma += student.oceny[i];
      }
    return suma/student.oceny.length;
  };
});
