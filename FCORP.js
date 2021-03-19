let log = console.log;
class Search {
  constructor(docs) {
    this.docs = docs;
  }

  findDocs(search) {
    let idDocs = new Array();
    let k = 0;
    while(k < this.docs.length) {
      let document = this.docs[k];
      if(document.indexOf(search) !== -1) idDocs.push(k);
      k++;
    }
    return idDocs.length !== 0 ? idDocs : 'Not found';
  }
}

let docs = new Search([
    'Bank regulation: Bank regulation is a form of government regulation which subjects banks to certain requirements',
    'Banking crisis: When banks suffer a sudden rush of withdrawals by depositors, this is called a bank run'
]);

log(docs.findDocs('government'));
log(docs.findDocs('banks'));
