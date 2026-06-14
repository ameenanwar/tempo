import './App.css';
function App() {
  

  return (
    <>

    <div className="dash-container">

      <div className='header'>
         <div className="title">
           <h1 font-size="50px">Expense Tracker</h1>
          <h6>Track and manage Expenses</h6>
         <div className="controls"></div>
         </div>
      </div>
      <div className='Total_Balance'>
        <div className='BalanceCard'>
          <div className="bc_left">
             <div className='Total_bal'>Total Balance</div>
             <div className="Amount">$$10.00</div>
             <div className="drop"></div>
          </div>

          <div className='bc_right'>
            < div className="total_exp">Total Expenses<br></br> 10.00</div>
            <div className="average">Average<br></br>10.00</div>
          </div>
          
          
        </div>
        
      </div>

      <div className="Budget_Tracking_Card">
        <div className='Budget_Tracking_Title'> 
          <div>Budget Tracking</div>
          <div color="grey">Monitor your spending acoss categories</div></div>
          <div className="Food">
             <div className="Left_Bud_Track">
              <div>Food</div>
              <div className="Remaining">$500</div>
             </div>
             <div className='Right_Bud_Track'>
              <div className="Used">$0/</div><div className="Out-Of">$500</div>
             </div>
            </div>

            <div className="Food">
             <div className="Left_Bud_Track">
              <div>Transportation</div>
              <div className="Remaining">$500</div>
             </div>
             <div className='Right_Bud_Track'>
              <div className="Used">$0/</div><div className="Out-Of">$500</div>
             </div>
            </div>

            <div className="Food">
             <div className="Left_Bud_Track">
              <div>Entertainment</div>
              <div className="Remaining">$500</div>
             </div>
             <div className='Right_Bud_Track'>
              <div className="Used">$0/</div><div className="Out-Of">$500</div>
             </div>
            </div>

            <div className="Food">
             <div className="Left_Bud_Track">
              <div>Shopping</div>
              <div className="Remaining">$500</div>
             </div>
             <div className='Right_Bud_Track'>
              <div className="Used">$0/</div><div className="Out-Of">$500</div>
             </div>
            </div>

            <div className="Food">
             <div className="Left_Bud_Track">
              <div>Utilities</div>
              <div className="Remaining">$500</div>
             </div>
             <div className='Right_Bud_Track'>
              <div className="Used">$0/</div><div className="Out-Of">$500</div>
             </div>
            </div>

            <div className="Food">
             <div className="Left_Bud_Track">
              <div>Health</div>
              <div className="Remaining">$500</div>
             </div>
             <div className='Right_Bud_Track'>
              <div className="Used">$0/</div><div className="Out-Of">$500</div>
             </div>
            </div>
        </div>



      <div className="Monthly_Distribution__Recent_Expenses">
        <div className="Monthly_Distribution">
            <div className='Budget_Tracking_Title'> 
            <div>$ Monthly Distribution</div>
            <div color="grey">Percentage breakdown of expenses by category each month</div>
        </div>
        <div className='Graph'></div>
        <div className="Monthly_Distribution_Cards">
          <div className="Monthly_Utilities">
            <div>Transportation</div>
            <div>$100</div>
            <div>4 ITEMS</div>

          </div>
          <div className="Monthly_Utilities">
            <div>Entertainment</div>
            <div>$100</div>
            <div>4 ITEMS</div>

          </div>
          <div className="Monthly_Utilities">
            <div>Shopping</div>
            <div>$100</div>
            <div>4 ITEMS</div>

          </div>
          <div className="Monthly_Utilities">
            <div>Utilties</div>
            <div>$100</div>
            <div>4 ITEMS</div>

          </div>
          <div className="Monthly_Utilities">
            <div>Health</div>
            <div>$100</div>
            <div>4 ITEMS</div>

          </div>
         
          

        </div>
      </div>
        <div className="Recent_Expenses">
          <div>Recent Expenses</div>
          <div>Your latest transactions</div>

        </div>
      </div>


      <div className="All_Expenses">
        <div className='Budget_Tracking_Title'> 
            <div>$ All Expenses</div>
            <div color="grey">Manage and view all your expenses</div>
        </div>
      </div>


    </div>

   
      
    </>
  )
}

export default App
