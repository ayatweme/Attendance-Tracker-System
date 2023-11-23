function saveToLocalStorage() {
    const trainer = {
      name: 'admin',
      email: 'admin@admin.com',
      password: 'adminA1@'
    };
  
    const trainers = JSON.parse(localStorage.getItem('trainers'))|| [];
    trainers.push(trainer);
    localStorage.setItem('trainers', JSON.stringify(trainers));
  }