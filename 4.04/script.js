class Human{
    constructor(name,surname,age,gender,nationality){

        this.name=name;
        this.surname=surname;
        this.age=age;
        this.gender=gender;
        this.nationality=nationality
    }
 getFullName (){
    return (this.name) + (this.surname);
 }

getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
}
}


class User extends Human{
 constructor(username,email,isAdmin,password,bio,name,surname,nationality,age){
   super(name,surname,age,gender,nationality)
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isLogged = false;
    this.password = password;
    this.bio = bio;

   if(password.length<5){
    window.alert("Password is cannocharacter out of five characte should not be less ")
   }

   if(bio.length>30){
    window.alert("Bio can be max 30 characters")
   }

 }

 changePassword(currentPassword,newPassword){
 if(currentPassword===this.password){
    this.password=newPassword;
    window.alert("Current Password is wrong")
 }

 else{
    window.alert("This password is true")

 }
 }

 
}
console.log(User)
