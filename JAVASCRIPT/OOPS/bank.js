

class Bank{

    constructor(UserName,accountNo,PhoneNo,Balance) {
        this.name=UserName;
        this.accountNo=accountNo;
        this.PhoneNo=PhoneNo;
        this.Balance=Balance;
         console.log("Bank details created successfully");
    }

   //deposite
   depositeAmount(amount){
    this.Balance+=amount;
    console.log(`Amount added to this account :`,this.Balance);
   }

   //withdraw amount
   withdrawAmount(amount){
    if(amount>0 && amount<=this.Balance){
        this.Balance-=amount;
        console.log(`Withdarw:`,this.Balance);
    }else if(amount>this.Balance){
        console.log("Insufficient Balance");
    }else{
        console.log("please type an amount");
    }
   }

   //Balance enquiry
     balanceEnquiry(){
        console.log(`Current Balance: ${this.Balance}`);
   }
}

const myAccount=new Bank('Anjali',1122334455,'o4792314629',1000);
myAccount.depositeAmount(6000);
myAccount.withdrawAmount(1000);
myAccount.balanceEnquiry();






