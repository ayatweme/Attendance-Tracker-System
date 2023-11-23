function saveToLocalStorage() {
    const trainer = {
      name: 'admin',
      email: 'admin@admin.com',
      password: 'adminA1@'
    };
  
    trainers.push(trainer);
    localStorage.setItem('trainers', JSON.stringify(trainers));
  }
