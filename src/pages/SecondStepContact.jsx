import RegisterLayout from "../components/RegisterLayout"
import stepTwoForm from "../db/stepTwoForm.json";
import DynamicForm from "../components/DynamicForm";
import { Button } from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from 'react-hook-form';

const schema = z.object({
  mobile_number: z.string().nonempty({ message: "Mobile Number is required" }).regex(/^09\d{9}$/),
  email: z.string().nonempty({ message: "Email is required" }).email({ message: "Invalid email address" }),
});

const SecondStepContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      mobile_number: '09',
    }
  })
  const navigate = useNavigate();
  const formDataLocal = JSON.parse(localStorage.getItem('formData'));
  console.log(formDataLocal)
  
  const onSubmit = (data) => {
    const formData = JSON.stringify({...data, ...formDataLocal});
    console.log(formData)
    navigate("/step3_mailing_infos");
    localStorage.setItem('step2IsFinished', true)
    localStorage.setItem('formData', formData)
  }

  return (
    <>
      <RegisterLayout>
        <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-8 w-1/2 rounded-md flex flex-col gap-4' noValidate>
          {
            stepTwoForm.map(formData => {
              return (
                <DynamicForm key={formData.formName} formData={formData} register={register} errors={errors} />
              )
            })
          }
          <Button btnType='submit' btnContent="Next Step" classNames="mt-4" />
        </form>
      </RegisterLayout>
    </>
  );
}

export default SecondStepContact;
