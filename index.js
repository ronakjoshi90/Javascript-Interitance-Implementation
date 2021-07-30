function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.getAge = function() {
  console.log('age for ' + this.name + ' is ' + this.age);
  return this.age;
};

Person.prototype.getName = function() {
  console.log('name of person is ' + this.name);
  return this.name;
};

function Employee(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
}

Employee.prototype.getDepartment = function() {
  console.log('dept of person is ' + this.department);
  return this.department;
};

Employee.prototype = Object.create(Person.prototype);

var ronak = new Person('Tom', 31);
var res = ronak.getAge();

var personObj = new Employee('Ronak Joshi', 30, 'IT');
var personObj2 = new Employee('Sonam', 25, 'Accounts');

console.log(personObj);

personObj.getAge();
personObj2.getAge();
