const numUniqueEmails = function(emails) {
    const mySet = new Set();
    for( let email of emails) {
        let formattedEmail = formatEmail(email);
        mySet.add(formattedEmail);
    }
    return mySet.size;
  };
      
  const formatEmail = function(email) {
      let [local, domain] = email.split('@');
      local = local.replace(/(\.)|(\+.*)/g, '');
      return local + '@' + domain;
  }; 

  // time complexity O(n^2)
  // space complexity O(n)