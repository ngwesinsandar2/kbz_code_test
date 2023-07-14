// import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
import { Button } from './components/Buttons';
// import DynamicForm from './components/DynamicForm'
import { Input, RadioInput, SelectBoxInput } from './components/FormComponents';
import RegisterLayout from './components/RegisterLayout'
import dbForm from "./db/dbForm2.json";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from 'react-hook-form';

const schema = z.object({
  human_type: z.string().nonempty({ message: "This is required" }),
  full_name: z.string().nonempty({ message: "Full Name is required" }),
  card: z.string().nonempty({ message: "Need to choose one" }),
  state: z.string().nonempty({ message: "State is required" }),
  township: z.string().nonempty({ message: "Township is required" }),
  type: z.string().nonempty({ message: "Type is required" }),
  number: z.string().nonempty({ message: "Number is required" }).regex(/^\d+$/).min(6),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
  const navigate = useNavigate();
  const formDataLocal = localStorage.getItem('formData');

  const onSubmit = (data) => {
    // console.log('hello')
    const formData = JSON.stringify(data);
    navigate("/step2_contact_infos");
    localStorage.setItem('step1IsFinished', true);
    localStorage.setItem('formData', formData)
    console.log(formData)
  }

  return (
    <>
      <RegisterLayout>
        <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-8 w-1/2 rounded-md grid grid-cols-3 gap-4'>
          <SelectBoxInput formData={dbForm[0]} register={register} errors={errors} classNames="col-span-1" />
          <Input formData={dbForm[1]} register={register} errors={errors} classNames="col-span-2" />
          <RadioInput formData={dbForm[2]} register={register} errors={errors} classNames="col-span-full" />
          <Input formData={dbForm[3]} register={register} errors={errors} />
          <Input formData={dbForm[4]} register={register} errors={errors} />
          <Input formData={dbForm[5]} register={register} errors={errors} />
          <Input formData={dbForm[6]} register={register} errors={errors} classNames="col-span-full" />
          <Button btnContent="Next Step" classNames="mt-4 col-span-full" />
        </form>

        {/* <form className='shadow-lg p-8 w-1/2 rounded-md flex flex-col gap-4'>
          <div className="flex gap-4">
            <SelectBoxInput formData={dbForm[0]} />
            <Input formData={dbForm[1]} />
          </div>
          <div className='flex flex-col gap-4'>
            <RadioInput formData={dbForm[2]} />
            <div className="flex gap-4">
              <Input formData={dbForm[3]} />
              <Input formData={dbForm[4]} />
              <Input formData={dbForm[5]} />
            </div>
            <Input formData={dbForm[6]} />
          </div>
        </form> */}

        {/* <form className='shadow-lg p-8 w-1/2 rounded-md'>
          {
            dbForm.map(formData => {
              return (
                <>
                  <div className="grid grid-cols-7">
                    <SelectBoxInput formData={formData} />
                    <Input formData={formData} />
                    <RadioInput formData={formData} />
                    <div className="flex">
                      <Input formData={formData} />
                      <Input formData={formData} />
                      <Input formData={formData} />
                    </div>
                    <Input formData={formData} />
                  </div>
                  <DynamicForm formData={formData} />
                </>
              )
            })
          }
        </form> */}
      </RegisterLayout>
    </>
  )
}

export default App
