
const Account = (function () {  
  let userEmail;
  let userPassword; 
  let userFirstName;
  let userLastName; 

  function isValidPassword(password) {
    return password === userPassword;
  }

  function anonymize(password) {
    if (isValidPassword(password)) {
      let name = '';
      for (let idx = 0; idx < 16; idx += 1) {
        name += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33 ));
      }
      return name;
    }
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize(userPassword);
      return this;
    },

    reanonymize(password) {
      if (isValidPassword(password)) {
        let name = '';
        for (let idx = 0; idx < 16; idx += 1) {
          name += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33 ));
        }
        this.displayName = name;
      }
    },

    firstName(password) {
      return isValidPassword(password) ? userFirstName : 'Invalid Password';
    },

    lastName(password) {
      return isValidPassword(password) ? userLastName : 'Invalid Password';
    },

    email(password) {
      return isValidPassword(password) ? userEmail : 'Invalid Password';
    },

    resetPassword(oldPassword, newPassword) {
      if (isValidPassword(oldPassword)) {
        userPassword = newPassword;
        return 'true';
      } else {
        return 'Invalid Password';
      }
    }
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'