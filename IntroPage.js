function saveToLocalStorage() {
    const Admin = {
      role : 1,
      name: 'admin',
      email: 'admin@admin.com',
      password: 'adminA1@',
      profileImage : 'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg',
    };
    localStorage.setItem('Admin', JSON.stringify(Admin));
  }