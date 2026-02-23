let deviceCount = 1;

function addDevice(energy, cost) {
  const list = document.getElementById("devicesList");

  const div = document.createElement("div");
  div.className = "device";

  div.innerHTML = `
    <span>Pajisja ${deviceCount}</span>
    <span>${energy.toFixed(2)} kWh – ${cost.toFixed(2)} ALL</span>
  `;

  list.appendChild(div);
  deviceCount++;
}
