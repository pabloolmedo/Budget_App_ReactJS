export const checkBudget = (budget, balance)=>{
    let classType;

    if((budget/4) > balance){
        classType = 'alert alert-danger';
    }else if((budget/2) > balance){
        classType= 'alert alert-warning';
    }else{
        classType = 'alert alert-success';
    }

    return classType;
}