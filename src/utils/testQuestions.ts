export const QuestionList = [ 
    {
    id: 1,
    question:"It's the start of a new year. You want to do it all: balance work, school, and friends all without crumbling down. You finally got your first job at Dunkin! What do you plan to do with your first check?",
    type: "multiple-choice",
    choices: [
        {value: "Save all of it of course! That's what I'll do with every check ", popup: "That's great! But no. This isn't sustainable life costs money. You should allocate some income to your wants and needs"},
        {value: "Spend it! I'll start saving after this check", popup: "That's fair"},
        {value: "Save some and spend some, I don't want to go all out but I still wokred hard for this check", popup: "Great! Could be a little more organzed tho"},
        {value: "I'll save 70% and spend 30%", popup: "Ok you cooked here. There are variations to this budgeting technique but the 70-20-10 rule is when you used 70% of your income on living expenses, 20% for savings and debts and 10% for savings"}
    ],
    answer: [0, 1, 2, 3]
    }, 

    {
    id: 2,
    question:"With this new job you finally opened up a savings account! If you deposit $1,000 into a savings account freshman year with an annual interest rate of 5% (anual compound) how much will you have after senior year (4 years)?",
    type: "multiple-choice",
    choices: [
        {value: "1,150.00", popup: "Hey not that little!"},
        {value: "1,157.63", popup: "You're right!"},
        {value: "1,200.00", popup: "Too much"},
        {value: "1,500.00", popup: "Sadly not this much"}
        ],
      answer: [1]
        },
    

{
    id: 3,
    question:"Oh no! Your laptop broke. Time to go shopping! You've saved up $2,000 from a couple of months at Dunkin. You have 2 options for the new Mac with an M3 chip: pay in full or select a payment plan. Which will you choose? ",
    type: "multiple-choice",
    choices: [
        {value: "Pay in full", popup: "Correct! If you have no other expenses you should pay it off in full. "},
        {value: "$500 upfront then $100 per month for 18 months, %5 interest", popup: "You would pay $2,375 total, that's an extra $375 out the door!"},
        {value: "12 months at 5%", popup: "$2,060.64 isn't bad but that 60.64 could have gone 6 coffees :/"},
        {value: "Biweekly at a 5% interest rate ", popup: "You'd pay $2,061.36, that's not quite the best option"}
        ],
    answer: [0]
        },

{
    id: 4,
    question:"Based on the last question, what is compound interest (principle is your based payment)",
    type: "multiple-choice",
    choices: [
        {value: "Interest calculated only on the principal.", popup: "It's not only the interest; it's like a snowball rolling down a hill – it just keeps getting bigger!"},
        {value: "Interest calculated on the principal and accrued interest.", popup: "Correct! It's interest calculated on the principal and accrued interest. the formula is A=P(1+r/n)^(nt)"},
        {value: "Interest paid only annually.", popup: "No there's different rates of interest available"},
        {value: "Interest that reduces the principal.", popup: "Compound interest builds up over time, not down. You could say it 'adds' value instead of subtracting"}
        ],
    answer: [1]
        },






{
    id: 5,
    question:"Yay! You got a raise now you make $2,400. Time to pay off the dept you owe to Jerry. She let you borrow $500 for a new PS5.  If you decide to pay her back $125 each month with %5 interest, how long will it take you to fully repay the debt?",
    type: "multiple-choice",
    choices: [
        {value: "2 months", popup: "Record time! But no it wouldn't take only 2 months, even without interest 500/125= 4 months"},
        {value: "3 months", popup: "Not quite But no it wouldn't take only 3 months, even without interest 500/125= 4 months"},
        {value: "4 months", popup: "Close! You for got the 5% interest"},
        {value: "5 months", popup: "Interest for the first month=P×i=500×0.004167≈2.08 -> = 500+2.08−125=377.08500+2.08−125=377.08                     "}
        ],
    answer: [3]
        },       
 {
    id: 6,
    question:"Oh no! You crashed your paretns car! While you weren't hurt your pockets will!  Your parents have a car insurance policy with a deductible of $500. How much will you need to pay out of pocket to cover the repair costs?",
    type: "multiple-choice",
    choices: [
        {value: "500", popup: "yes"},
        {value: "1,000", popup: "That's a bit high! Remember, you only pay the deductible amount."},
        {value: "1,500", popup: " Not quite! The deductible isn't the subtracted amount"},
        {value: "2,000", popup: "There was no change! Account for deductible"}
        ],
    answer: [0]
        },       

 {
    id: 7,
    question:"Wow you've been managing life well!Let's open a credit card. credit card with a $1,000 limit and a 20% annual percentage rate (APR). You decide to use the card to purchase textbooks for the semester, which total $600. You plan to pay the minimum balance each month, which is typically 3% of the outstanding balance. If you make only the minimum payment, how long will it take you to pay off the $600 balance, and how much interest will you pay over that period?",
    type: "multiple-choice",
    choices: [
        {value: "It will take approximately 6 months and you will pay $30 in interest", popup: "Not quite try again"},
        {value: "It will take approximately 10 months and you will pay $45 in interest.", popup: "Almost there give it another go"},
        {value: "It will take approximately 12 months and you will pay $60 in interest.", popup: "Correct!"},
        {value: "It will take approximately 18 months and you will pay $80 in interest.", popup: "Choose another option! The correct one this time "}
        ],
    answer: [2]
        },   

 {
    id: 8,
    question:"That last question was a lot! Let's go with something simple. You’ve been budgeting carefully, but you've noticed prices have gone up. What can you do?",
    type: "multiple-choice",
    choices: [
        {value: "Review and prioritize your monthly expenses to identify areas where you can cut back.", popup: "yes!"},
        {value: "Continue spending without changing your budget, it will help the economy and stop inflation", popup: "Sadly this is not how inflation works. Spending without consideration can actually worsen the problem!"},
        {value: "Look for discounts, coupons, or sales to help save money on essential purchases.", popup: "yes!"},
        {value: " Consider finding a part-time job or side gig to supplement your income.", popup: "Difficult in this market but definitely an option"}
        ],
    answer: [0,2,3]
        },   

 {
    id: 9,
    question:"While we all pay sales tax this will be your first time with a tax return with your Dunkins income. Which of the following is true ",
    type: "multiple-choice",
    choices: [
        {value: "Taxes are a type of voluntary fee that you can choose to pay or ignore.", popup: "Voluntary? ... "},
        {value: " Everyone pays taxes, but the amount you pay depends on how much money you earn.", popup: "Yes! We all pay taxes!!!"},
        {value: "Once you pay your taxes, you never have to pay them again for the rest of your life.", popup: "The IRS are at your doorstep. Redo this question to escape jail."},
        {value: "Taxes only apply to people who are over 18 years old.", popup: "Regardless of age most states have a sale tax"}
        ],
    answer: [1]
        },      
 {
    id: 10,
    question:"Almost there! It's time to go to college to your dream school.  You’ve received an offer for a student loan of $10,000 to help cover tuition and living expenses. However, now that you know loans must be paid back with interest after you graduate. What factors should you consider before accepting the student loan? ",
    type: "multiple-choice",
    choices: [
        {value: " The total amount of the loan and how it fits into your overall budget for college expenses.", popup: "Yes you're on your way!"},
        {value: "The interest rate on the loan and how it will affect your total repayment amount.", popup: "Yes you're on your way!"},
        {value: "Whether you will need to work part-time during school to help manage living expenses.", popup: "Yes you're on your way!"},
        {value: "The possibility of receiving scholarships or grants that do not need to be repaid", popup: "Yes you're on your way!"}
        ],
    answer: [0,1,2,3]
        },   

    ]        
