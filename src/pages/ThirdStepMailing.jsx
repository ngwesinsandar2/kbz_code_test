import { useNavigate } from "react-router-dom";
import RegisterLayout from "../components/RegisterLayout"
// import DynamicForm from "../components/DynamicForm";
import stepThreeForm from "../db/stepThreeForm.json";
import { Button } from "../components/Buttons";
import geodata from "../db/geodata.json";
import { SelectBoxInput, Textarea } from "../components/FormComponents";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  state: z.string().nonempty({ message: "State is required" }),
  township: z.string().nonempty({ message: "Township is required" }),
  address: z.string().nonempty({ message: "Address is required" }).max(350),
});

const ThirdStepMailing = () => {
  const [districts, setDistricts] = useState([]);
  const [townships, setTownships] = useState([]);
  // const [users, setUsers] = useState([]);
  const {
    register,
    watch,
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
  const usersLocal = JSON.parse(localStorage.getItem('users'));
  const watchFieldState = watch("state")
  const randomId = Math.floor(Math.random() * 1000000);

  const onSubmit = (data) => {
    const formData = { id: randomId, ...data, ...formDataLocal };
    // console.log(data)
    if (usersLocal) {
      const users = [...usersLocal, formData];
      localStorage.setItem('users', JSON.stringify(users))
    } else {
      const users = [formData];
      localStorage.setItem('users', JSON.stringify(users))
    }
    // setUsers(prevState => [...prevState, formData])
    navigate("/dashboard/customers");
    localStorage.setItem('step2IsFinished', true)
    localStorage.setItem('formData', JSON.stringify(formData))
  }

  const fetchDistricts = () => {
    geodata.data.forEach(region => {
      region.districts.forEach(district => {
        return setDistricts(prevState => [...prevState, district]);
      })
    });
  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      // console.log(value, name, type)
      if (name == 'state') {
        const filteredDistrict = districts.filter(d => {
          return d.eng == value.state
        })
        // console.log(filteredDistrict)
        setTownships(filteredDistrict[0]?.townships)
      }
    })
    return () => subscription.unsubscribe()
  }, [watchFieldState])

  useEffect(() => {
    fetchDistricts();
  }, [])


  return (
    <>
      <RegisterLayout>
        <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-8 w-1/2 rounded-md flex flex-col gap-4'>
          <SelectBoxInput formData={stepThreeForm[0]} register={register} errors={errors} dataOptions={districts} />
          <SelectBoxInput formData={stepThreeForm[1]} register={register} errors={errors} dataOptions={townships} />
          <Textarea formData={stepThreeForm[2]} register={register} errors={errors} helperText="Your character limit is 350" />
          <Button btnType='submit' btnContent="Finished" classNames="mt-4" />
        </form>
      </RegisterLayout>
    </>
  );
}

export default ThirdStepMailing;