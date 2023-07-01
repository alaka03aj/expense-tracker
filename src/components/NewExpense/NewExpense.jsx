import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const saveExpenseFormHandler = (enteredExpenseForm) => {
        const expenseData = {
            ...enteredExpenseForm,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm = {saveExpenseFormHandler}/>
        </div>
    )
};

export default NewExpense;