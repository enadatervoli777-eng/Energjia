export function calculateEnergy(power, hours, price) {
  const energy = (power * hours) / 1000;
  const cost = energy * price;

  return {
    energy: energy.toFixed(2),
    cost: cost.toFixed(2),
  };
}


