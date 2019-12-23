const tableHighLight = (table) => {
  const tr = [...(table.rows)].slice(1);
  tr.forEach((e) => {
    const value = Number(e.cells[2].textContent);
    if (value > 0) {
      e.classList.add('table-success');
    }
    if (value < 0) {
      e.classList.add('table-danger');
    }
  });
};

const table = document.querySelector('table');
tableHighLight(table);
