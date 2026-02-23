document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("energyForm");
  const result = document.getElementById("result");
  const ctx = document.getElementById("energyChart");

  let chart;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const power = Number(document.getElementById("power").value);
    const hours = Number(document.getElementById("hours").value);
    const price = Number(document.getElementById("price").value);

    const energy = (power * hours) / 1000;
    const cost = energy * price;

    result.innerText = `Energy: ${energy.toFixed(2)} kWh | Cost: ${cost.toFixed(2)} ALL`;

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Energy (kWh)", "Cost (ALL)"],
        datasets: [{
          label: "Calculation Result",
          data: [energy, cost],
        }]
      }
    });
  });
});


