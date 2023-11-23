function saveToLocalStorage() {
    const trainer = {
      name: 'admin',
      email: 'admin@admin.com',
      password: 'adminA1@'
    };
    localStorage.setItem('trainers', JSON.stringify(trainer));
  }