const stepThreeForm = [
  {
    formName: "State/District",
    placeholder: "Please enter your state",
    isRequired: true,
    type: "selectbox",
    value: "",
    isAction: false,
    isHidden: false,
    options: []
  },
  {
    formName: "Township",
    placeholder: "Please enter your township",
    isRequired: true,
    type: "selectbox",
    value: "",
    isAction: false,
    isHidden: false,
    options: []
  },
  {
    formName: "Address",
    placeholder: "Please enter your current address",
    isRequired: false,
    type: "textarea",
    value: "",
    isAction: false,
    isHidden: false,
    options: []
  },
  {
    formName: "Next Step",
    placeholder: "",
    isRequired: false,
    type: "submit",
    value: "",
    isAction: false,
    isHidden: false,
    options: []
  }
]

export default stepThreeForm;