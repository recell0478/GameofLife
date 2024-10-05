import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Resource = () => {
  const [details, setDetails] = useState<string | null>(null);

  // Data for financial literacy content
  const importanceData = [
    "Empowers Decision-Making: Equips students to make informed financial choices and manage money effectively.",
    "Prepares for Financial Independence: Helps students understand personal finance, budgeting, and savings for adulthood.",
    "Reduces Financial Stress: Effective money management can lower anxiety related to finances, improving mental well-being.",
    "Promotes Long-Term Stability: Teaches the significance of saving and investing for future financial security.",
    "Bridges Knowledge Gaps: Addresses the lack of formal financial education among students.",
  ];

  const statisticsData = [
    "88% of Americans wish they had learned more about personal finance in school (National Financial Educators Council).",
    "High school students scored an average of 48% on financial literacy tests (Jump$tart Coalition).",
    "Individuals with high financial literacy are more likely to save for retirement and have better credit scores (Pew Charitable Trusts).",
    "60% of college students wish they had learned more about managing student loans before borrowing (Sallie Mae).",
  ];

  const topicsData: { [key: string]: { title: string; content: string } } = {
    budgeting: {
      title: "Budgeting",
      content: ` 
        <h3>How to Create a Budget</h3>
        <ol>
          <li><span class="font-bold">Identify Your Income:</span> Include all sources of income (part-time jobs, allowances, etc.).</li>
        <li><span class="font-bold">List Your Expenses:</span> Categorize expenses as fixed (rent, utilities) and variable (entertainment, food).</li>
        <li><span class="font-bold">Set Savings Goals:</span> Allocate a portion of your income for savings.</li>
        <li><span class="font-bold">Create Your Budget:</span> Use a spreadsheet or budgeting app to track income and expenses.</li>
        </ol>
        <h4>Tools and Apps for Budgeting</h4>
        <ul>
          <li>Mint: A free budgeting tool that syncs with your bank accounts to track spending.</li>
          <li>YNAB (You Need A Budget): A popular budgeting app that encourages proactive financial management.</li>
          <li>PocketGuard: Helps users see how much money they can spend after accounting for bills, goals, and necessities.</li>
        </ul>
      `,
    },
    saving: {
      title: "Saving",
      content: `
        <h3>Importance of Saving Money</h3>
        <ul>
          <li><strong>Emergency Fund:</strong> Saving money provides a safety net for unexpected expenses, helping to avoid debt.</li>
          <li><strong>Financial Goals:</strong> Regular saving helps achieve short-term (vacations) and long-term (college, car) financial goals.</li>
          <li><strong>Peace of Mind:</strong> Knowing you have savings can reduce stress and anxiety.</li>
        </ul>
      `,
    },
    investing: {
      title: "Investing",
      content: `
        <h3>Basics of Investing</h3>
        <ul>
          <li><strong>Stocks:</strong> Ownership in a company; potential for high returns but comes with higher risk.</li>
          <li><strong>Bonds:</strong> Loans made to corporations or governments with fixed interest rates.</li>
          <li><strong>Mutual Funds:</strong> Pooled funds from multiple investors to buy a diversified portfolio of stocks, bonds, or other securities.</li>
        </ul>
        <h3>Compounding Interest Explained</h3>
        <p>Definition: Compounding interest is the interest calculated on the initial principal and also on the accumulated interest from previous periods.</p>
        <p>Importance: The earlier you start investing, the more you benefit from compounding.</p>
      `,
    },
    debt: {
      title: "Debt Management",
      content: `
        <h3>Types of Debt</h3>
        <ul>
          <li><strong>Student Loans:</strong> Loans borrowed to pay for education, typically requiring repayment after graduation.</li>
          <li><strong>Credit Cards:</strong> A form of revolving debt that allows users to borrow money for purchases.</li>
        </ul>
        <h3>Strategies for Managing and Paying Off Debt</h3>
        <ul>
          <li>Create a Debt Repayment Plan: Prioritize paying off high-interest debts first.</li>
          <li>Make More Than the Minimum Payment: Paying more than the minimum can significantly reduce the total interest paid over time.</li>
          <li>Consider Debt Consolidation: Combining multiple debts into a single loan with a lower interest rate can make repayment easier.</li>
        </ul>
      `,
    },
    credit: {
      title: "Credit",
      content: `
        <h3>Understanding Credit Scores and Reports</h3>
        <p><strong>Credit Score:</strong> A numerical representation of creditworthiness based on credit history.</p>
        <p><strong>Credit Report:</strong> A detailed report of your credit history, including payment history and credit utilization.</p>
        <h3>Importance of Maintaining Good Credit</h3>
        <ul>
          <li>Lower Interest Rates: Good credit can qualify you for loans with lower interest rates.</li>
          <li>Better Loan Terms: Lenders may offer favorable terms, including higher loan amounts and longer repayment periods.</li>
          <li>Employment Opportunities: Some employers check credit history as part of the hiring process.</li>
        </ul>
      `,
    },
    taxes: {
      title: "Filing Taxes",
      content: `
        <h3>Understanding Taxes</h3>
        <p><strong>What Are Taxes?:</strong> Taxes are mandatory contributions imposed by governments on income, goods, and services.</p>
        <h3>Filing Taxes as a Student</h3>
        <ul>
          <li><strong>When to File:</strong> If you earn income, you may need to file a tax return.</li>
          <li>Form 1040: The standard IRS form used to file individual income tax returns.</li>
          <li>Deductions and Credits: Standard Deduction, Education Credits available for qualified education expenses.</li>
        </ul>
      `,
    },
  };

  // Function to handle showing topic details
  const showDetails = (topic: string) => {
    if (topicsData[topic]) {
      setDetails(topicsData[topic].content);
    } else {
      setDetails(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">

        <Link
          to="/"
          className="bg-[#115aad] rounded-lg py-4 px-6 mt-32 text-[#ffffff] font-poppins font-bold text-2xl transform transition-transform duration-200 hover:scale-105 cursor-pointer" // Increased padding and font size
        >
          Play the Game!
        </Link>

      <h1 className="font-merriweather text-3xl md:text-4xl lg:text-8xl text-center mx-5 md:mx-0 mt-14 mb-[3rem]">
        Resources
      </h1>

      <section id="importance" className="text-center my-5 font-poppins mb-12 mx-5 md:mx-0">
        <h2 className="text-2xl font-bold">
          Importance of Financial Education for Students
        </h2>
        <ul className="mt-2">
          {importanceData.map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="statistics" className="text-center my-5v font-poppins mb-9 mx-5 md:mx-0">
        <h2 className="text-2xl font-bold">Statistics and Data</h2>
        <ul className="mt-2">
          <div className="font-poppins">
            {statisticsData.map((stat, index) => (
              <li key={index} className="mt-2">
                {stat}
              </li>
            ))}
          </div>
        </ul>
      </section>

      <section id="topics" className="text-center my-5 font-bold mx-5 md:mx-0">
        <h2 className="text-2xl mb-9">Topics</h2>
        <div className="max-w-10xl flex flex-col gap-10 md:gap-0 md:flex-row justify-between m-auto">
          {Object.keys(topicsData).map((topic, index) => (
            <button
              key={index}
              className="mt-2 bg-[#115aad] text-white p-2 rounded mx-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer" // Updated button color and added horizontal margin
              onClick={() => showDetails(topic)}
            >
              {topicsData[topic].title}
            </button>
          ))}
        </div>
      </section>

      <section id="topic-details" className="text-center mt-5 mb-32 mx-5 md:mx-0">
        <h2 className="text-2xl font-bold">Details</h2>
        <div
          id="details-content"
          className="mt-2 p-4 border border-gray-300 rounded font-poppins"
          dangerouslySetInnerHTML={{
            __html: details || "<p>Select a topic to see details.</p>",
          }}
        />
      </section>
    </div>
  );
};

export default Resource;
