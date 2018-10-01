const initialState = {
  modalProps: {},
  modalType: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        type: action.type,
        modalProps: action.modalProps,
        modalType: action.modalType
      };
    case "HIDE_MODAL":
      return initialState;
    default:
      return state;
  }
};
