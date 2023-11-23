function saveToLocalStorage() {
    const Admin = {
      name: 'admin',
      email: 'admin@admin.com',
      password: 'adminA1@'
    };
    localStorage.setItem('Admin', JSON.stringify(Admin));
  }