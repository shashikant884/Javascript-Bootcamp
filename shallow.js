const person = {
    name: "shashikant",
    class : 12,
    address : {
        streat: "Link Road",
        pincode : 400076,

    },
};

const copyPerson = {...person};
// copyPerson.name = "Abhi";
// copyPerson.address.pincode = 100; 
// console.log(copyPerson);


const copyPerson2 = JSON.parse(JSON.stringify(person));
copyPerson.address.pincode = 1100; 
console.log(copyPerson2);
