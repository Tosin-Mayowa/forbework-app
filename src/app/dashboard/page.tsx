import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdOutlineSavings } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineInventory } from "react-icons/md";
import ChartComponent from "@/Components/Charts/Charts";
import { GiNetworkBars } from "react-icons/gi";
import { MdNetworkWifi1Bar } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
export default function Dashboard() {
  return (
    <>
      <section className="overview-wrap">
        <div className="left">
          <div className="mobile-view-card">
            <div className="mobile-balance">
              <div className="balance-mob">
                <MdOutlineAccountBalanceWallet className="overview-icon" />
                <p className="balance-text">Your Bank Balance</p>
              </div>
              <div className="number-div">
                <p className="number">$1000.00</p>
              </div>
            </div>
            <div className="mobile-transaction">
              <div className="transact-mob">
                <GrTransaction className="overview-icon" />
                <p className="balance-text">Daily Transactions</p>
              </div>
              <div className="number-div">
                <p className="number">12</p>
              </div>
            </div>
          </div>

          <div className="mobile-view-card">
            <div className="mobile-balance">
              <div className="balance-mob">
              <MdOutlineSavings className="overview-icon" />
              <p className="balance-text">Your Total Savings</p>
              </div>
              <div className="number-div">
                <p className="number">5</p>
              </div>
            </div>
            <div className="mobile-transaction">
              <div className="transact-mob portfolio">
              
                <MdOutlineInventory className="overview-icon" />
                <p className="balance-text">Portfolio</p>
              </div>
              <div className="number-div">
              <p className="number">4</p>
              </div>
            </div>
          </div>
         
          <div className="card-wrap-1">
            <div className="balance box">
              <MdOutlineAccountBalanceWallet className="overview-icon" />
              <p className="number">1000.00</p>
              <p className="balance-text">Your Bank Balance</p>
            </div>
            <div className="transactions box">
              <GrTransaction className="overview-icon" />
              <p className="number">12</p>
              <p className="balance-text">Daily Transactions</p>
            </div>
            <div className="savings box">
              <MdOutlineSavings className="overview-icon" />
              <p className="number">4</p>
              <p className="balance-text">Total Savings</p>
            </div>
            <div className="investment box">
              <MdOutlineInventory className="overview-icon" />
              <p className="number">4</p>
              <p className="balance-text">Investment Portfolio</p>
            </div>
          </div>
          <div className="card-wrap-2">
            <div className="card-analysis">
              <div className="analysis">
                <FaRegCreditCard className="overview-icon" />
                <p className="number">$3000.00</p>
                <p className="balance-text">Card Spending this week</p>
              </div>
              <div className="analysis missed">
                <p className="analysis-title">Overdue Savings</p>
                <p className="analysis-text">
                  see savings <br />
                  schedule missed
                </p>
                <div className="analysis-default">-2.00</div>
              </div>
            </div>
            <ChartComponent />
          </div>
          <div className="card-wrap-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TXN0001</td>
                  <td>2025-04-01</td>
                  <td>$1000.00</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>TXN0001</td>
                  <td>2025-04-01</td>
                  <td>$1000.00</td>
                  <td>inComplete</td>
                </tr>
                <tr>
                  <td>TXN0001</td>
                  <td>2025-04-01</td>
                  <td>$1000.00</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>TXN0001</td>
                  <td>2025-04-01</td>
                  <td>$1000.00</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="right">
          <div className="right-card-1">
            <h3 className="progress-heading">Formation Status</h3>
            <p className="progress-text">in progress</p>
            <div className="progress-bar">
              <div className="progress-fluid"></div>
            </div>
            <p className="process-details">
              <span>Estimated processing </span>
              <br />
              4-5 business days
            </p>
            <button className="progress-btn">view status</button>
          </div>
          <div className="right-card-2">
            <div className="tools">
              <GiNetworkBars className="tools-icon" />
              <p className="tools-text">Airtime</p>
            </div>
            <div className="tools">
              <MdNetworkWifi1Bar className="tools-icon" />
              <p className="tools-text">Data</p>
            </div>
            <div className="tools">
              <MdOutlineLiveTv className="tools-icon" />
              <p className="tools-text">Tv Bills</p>
            </div>
          </div>
          <div className="right-card-3">
            <h3 className="alert">Features alert</h3>
            <p className="alert-text">New investment package</p>
            <p className="alert-date">Launch Date:April 26,2025</p>
          </div>
        </div>
      </section>
    </>
  );
}
