var TotalValue = 0;
var TotalPNL = 0;
var TotalDeposit = 0;
var userHighRisk = 0;
var userLowRisk = 0;

function Riskcal() {
          var text = `
            <table>
              <tr>
                <th>Risk Level</th>
                <th>Portfolio Breakdown</th>
                <th>User Limit</th>
                <th>Risk Exposure</th>
              </tr>`;

          var breakdown = (TotalValue/(TotalValue+TotalDeposit)*100).toFixed(2)
          if (breakdown>userHighRisk) {
            output = "Over Exposed";
          }
          else if (breakdown==userHighRisk) {
            output = "On Target";
          }
          else{
            output = "Under Exposed";
          }
          text += `
            <tr>
              <td>High Risk</td>
              <td>${breakdown}</td> 
              <td>${userHighRisk}</td>
              <td>${output}</td>
            </tr>`;

            var breakdown = (TotalDeposit/(TotalValue+TotalDeposit)*100).toFixed(2)
            if (breakdown<userLowRisk) {
              output = "Under Exposed";
            }
            else if (breakdown==userLowRisk) {
              output = "On Target"
            }
            else{
              output = "Over Exposed";
            }
          text += `
            <tr>
              <td>Low Risk</td>
              <td>${breakdown}</td> 
              <td>${userLowRisk}</td>
              <td>${output}</td>
            </tr>`;  

          text += "</table>";
          $(".mypanel2").html(text);
}

function getStocksByUserID() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/stock_records/by-user-id?user_id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Exchange Code</th>
                  <th>Stock Code</th>
                  <th>No. of Shares</th>
                  <th>Purchase Cost</th>
                  <th>Current Price</th>
                  <th>Current Value</th>
                  <th>PNL</th>
                </tr>`;

            TotalValue = 0;
            TotalPNL = 0;

            data.forEach((item) => {
                var Value = item.no_of_shares*item.current_price;
                var PNL = item.no_of_shares*(item.current_price-item.purchase_cost);
                text += `
                    <tr>
                      <td>${item.exchange_code}</td>
                      <td>${item.stock_code}</td>
                      <td>${item.no_of_shares}</td>
                      <td>${item.purchase_cost}</td>
                      <td>${item.current_price}</td>
                      <td>${(item.no_of_shares*item.current_price).toFixed(2)}</td>
                      <td>${(item.no_of_shares*(item.current_price-item.purchase_cost)).toFixed(2)}</td>
                    </tr>`;
                TotalValue += Value;
                TotalPNL += PNL;
            });
            text += `
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${TotalValue}</td>
              <td>${(TotalPNL).toFixed(2)}</td>
            </tr>`;            
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getDepositsByUserID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/deposit_records/by-user-id?user_id=${id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `
            <table>
              <tr>
                <th>Bank</th>
                <th>Account Type</th>
                <th>Deposit Amt</th>
                <th>Interest Rate %</th>
              </tr>`;

          TotalDeposit = 0

          data.forEach((item) => {
              text += `
                  <tr>
                    <td>${item.bank_name}</td>
                    <td>${item.deposit_type}</td>
                    <td>${item.deposit_amt}</td>
                    <td>${item.interest_rate}</td>
                  </tr>`;
              TotalDeposit += item.deposit_amt;
          });
          text += `
            <tr>
              <td>Total</td>
              <td></td>
              <td>${TotalDeposit}</td>
              <td></td>
            </tr>`;
          text += "</table>";
          $(".mypanel1").html(text);
      })
      .catch((error) => console.log("error", error));
}

function getUsersByUserID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/users/by-user-id?user_id=${id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `Welcome ${data[0].first_name} ${data[0].last_name}`;
          $(".user1").html(text);
          userHighRisk = data[0].high_risk;
          userLowRisk = data[0].low_risk;
      })
      .catch((error) => console.log("error", error));
}

function getStocksAndDepositsByUserID() {
  getStocksByUserID();
  getDepositsByUserID();
  $(".mypanel2").html("");
}

function getRiskcal() {
  Riskcal();
  $(".mypanel1").html("");  
  $(".mypanel").html("");
}

