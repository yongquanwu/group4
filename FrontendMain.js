function getFromServer() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch("http://localhost:3000/products/all", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        var html = `<table>
               <tr>
               <th> ID </th>
               <th> Name </th>
               <th> Price </th>
               </tr>
             `;
        data.forEach((item) => {
          html += `
              <tr>
                <td> ${item.id} </td>
                <td> ${item.name} </td>
                <td> ${item.market_price} </td>
              </tr>
              `;
        });
        html += `</table>`;
        $(".mypanel").html(html);
      })
      .catch((error) => console.log("error", error));
  }
  
  function deleteData() {
    let id = document.getElementById("idToDelete").value;
    fetch(`http://localhost:3000/products/delete/by-id?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((response) => $(".mypanel").html(response))
      .catch((error) => console.log(error));
  }
  
  function postData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Populate this data from e.g. form.
    var raw = JSON.stringify({
      type: 0,
      name: "dixant mittal",
      email: "dixant@email.com",
      tolerance: 0.5,
      wallet: 100000,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
  
    fetch("http://localhost:3000/customer/add", requestOptions)
      .then((response) => response.text())
      .then((result) => $(".mypanel").html(result))
      .catch((error) => console.log("error", error));
  }
  