class User {
    static count = 0;
    constructor(username, email, password) {
     this.username = username;
     this.email = email;
     this.password = password;
      User.count++;
    }
    numberOfUsers() {
      console.log("currentNumberOfUsers = " User.count);
    }
  }
  class Member extends user {
    constructor(username, email, password) {
        super(username, email, password);
        this.membershipactivetilldate = new Date(2023, 2, 3);
        this.package = '';
    }
    purchaseMembership(membershippackagename) {
      
        this.package = membershippackagename;
        const currentDate = new Date(this.membershipactivetilldate);
        if (membershippackagename === "MONTHLYPACKAGE") {
                currentDate.setMonth(currentDate.getMonth() + 1);
            } else if (membershippackagename === "YEARLYPACKAGE") {
                currentDate.setFullYear(currentDate.getFullYear() +1);
            } else {
                
                return;
            }
        this.membershipactivetilldate = currentDate;
     
      }
    
      subscriptionActiveTill() {
        console.log(
          this.username +
            " is subscribed to " + 
            this.package +
            " uptill " +
            this.membershipactivetilldate.toDateString()
        );
      }
    
    }
    
    function createNewStudents(username, email, password, membershippackagename){
        const mike = new Member(username, email, password);  
        mike.purchaseMembership(membershippackagename);
        mike.subscriptionActiveTill();

  }
