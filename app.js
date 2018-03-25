myApp = angular.module('myApp', []);
function studenciCtrl() {
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
};
myApp.component('osoby',{
  templateUrl: 'osoby.html',
  controller: studenciCtrl

});
function studentCtrl() {
  this.update = function(prop, value) {
    this.onUpdate({student: this.student, prop: prop, value: value});
  };
}
myApp.component('osoba',{
  templateUrl: 'osoba.html',
  controller: studentCtrl,
  bindings: {
    student: '<',
    pokaz: '<',
    // onUpdate: '&'
  }
});
myApp.component('oceny',{
  templateUrl: 'oceny.html',
  controller: function ocenyController(){
    this.average = function(student) {
      let suma=0;
        for(let i = 0;i<student.oceny.length;++i) {
          suma += student.oceny[i];
        }
      return suma/student.oceny.length;
    };
  },
  bindings: {
    student: '<'
  }
});

function EditableFieldController($scope, $element, $attrs) {
  var ctrl = this;
  ctrl.editMode = false;

  ctrl.handleModeChange = function() {
    if (ctrl.editMode) {
      ctrl.onUpdate({value: ctrl.fieldValue});
    }
    ctrl.editMode = !ctrl.editMode;
  };

  ctrl.$onInit = function() {

    if (!ctrl.fieldType) {
      ctrl.fieldType = 'text';
    }
  };
};
myApp.component('editableField', {
  templateUrl: 'editable.html',
  controller: EditableFieldController,
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdate: '&'
  }
});
