import { EmailInput, Input, RadioInput, SelectBoxInput, Textarea } from "./FormComponents";

const DynamicForm = ({ formData, dataOptions, register, errors }) => {
  switch (formData.type) {
    case "input":
      return (
        <>
          <Input formData={formData} register={register} errors={errors} />
        </>
      )
      break;
    case "email":
      return (
        <>
          <EmailInput formData={formData} register={register} errors={errors} />
        </>
      )
      break;
    case "radio":
      return (
        <>
          <RadioInput formData={formData} register={register} errors={errors} />
        </>
      )
      break;
    case "selectbox":
      return (
        <>
          <SelectBoxInput formData={formData} register={register} errors={errors} dataOptions={dataOptions} />
        </>
      )
      break;
    case "textarea":
      return (
        <>
          <Textarea formData={formData} register={register} errors={errors} />
        </>
      )
      break;

    default:
      break;
  }
}

export default DynamicForm;