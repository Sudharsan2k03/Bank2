class bankAccount{
    constructor(balance){
        this.balance=balance
    }
    deposit(amount){
        this.balance+=amount
    }
    withdraw(amount){
        if(this.balance - amount<=0){
            console.log("Sorry you cant withdraw")
            return
        }
        this.balance-=amount
    }

}
const ib = new bankAccount(100)

let amountdiv=document.getElementById("amount")
let depositdiv=document.getElementById("Deposit")
let withdrawdiv=document.getElementById("Withdraw")
let balancediv=document.getElementById("Balance")

depositdiv.onclick=()=>{
    let amounts=Number(amountdiv.value)
    ib.deposit(amounts)
    balancediv.innerHTML=`Balance: ${ib.balance}`
}
withdrawdiv.onclick=()=>{
    let amounts=Number(amountdiv.value)
    ib.withdraw(amounts)
    balancediv.innerHTML=`Balance: ${ib.balance}`
}