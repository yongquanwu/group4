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

            var TotalValue = 0;
            var TotalPNL = 0;

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
                      <td>${item.no_of_shares*item.current_price}</td>
                      <td>${item.no_of_shares*(item.current_price-item.purchase_cost)}</td>
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
              <td>${TotalPNL}</td>
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

          var TotalDeposit = 0

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

function getStocksAndDepositsByUserID() {
  getStocksByUserID();
  getDepositsByUserID()
}