require('datejs');

function combineUsers(...args) {
  let combinedObject = {
    users:[]
  };

  for (const arg of args) {
    combinedObject.users = [...combinedObject.users, ...arg];
  }
  
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};