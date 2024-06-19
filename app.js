const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];


function deleteTask(id) {
    const index =  tasks.findIndex((index) => index.id === id);
    if (index ) {
        tasks.splice(index, 1)
    }
}

deleteTask(2);
console.log(tasks);
// [
//   { id: 1, name: 'Fishing' },
//   { id: 3, name: 'Swimming' }
// ]