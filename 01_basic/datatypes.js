// stack(primitive) , Heap (non primitive)

// primitives goes into stack like int , boolean, string
// it provides only copy of stack so it can in only 

//non primitive 
// it provides reference of heap so if you can change
// in heap then it change 



let youtubeName=" sachin Chaudhary"
let anotherName= youtubeName
anotherName ="chaiaurcode"
console.log(youtubeName);
console.log(anotherName);


let user=
{
    email : "user@google.com",
    upi:"user@bl"

}
let userTwo=user

userTwo.email = "sachin@google.com"
console.log(user.email);
console.log(userTwo.email);