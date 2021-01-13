console.clear();

const { createStore, combineReducers } = Redux;

// people dropping off forms (ACTION CREATORS)
const createClaim = (name, amount) => {
  return {
    // form with type and payload
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const createPolicy = (name) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: 20,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    },
  };
};

// Department (REDUCERS)

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 200, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfmoney - action.payload.amount;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.type.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter((policy) => policy != action.payload.name);
  }

  return listOfPolicies;
};

//Company setup (Combine Reducers)

const ourDepartments = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies,
});

// Store
const store = createStore(ourDepartments);

store.dispatch(createPolicy('Omer'));
store.dispatch(createClaim('Omer', 20));
store.dispatch(deletePolicy('Omer'));

console.log(store.getState());
