
const output = document.getElementById('output');
output.innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>';

function createPromise(id) {
  const delay = Math.random() * 2000 + 1000; 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, time: delay / 1000 });
    }, delay);
  });
}

const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];

const startTime = Date.now();

Promise.all(promises).then(results => {
  const endTime = Date.now();
  const totalTime = ((endTime - startTime) / 1000);

  output.innerHTML = '';

  results.forEach(result => {
     const row = document.createElement('tr');
      row.innerHTML = `
        <td>Promise ${result.id}</td>
        <td>${Math.floor(result.time)}</td>
      `;
      output.appendChild(row);
  });
	
  const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalTime.toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
});
