import { useForm } from "react-hook-form"
import './App.css'

function App() {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log("Data submitted : ", data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First name : </label>
        <input
        className={errors.firstName ? 'input-error' : ""}
        {...register("firstName", {
          required: { value: true, message: "First name is required" },
          minLength: { value: 2, message: "Min length is 2" },
          maxLength: { value: 6, message: "Max length is 6" }
        })} />
        {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        {/* input ko form se link krna pdega -> use register 
        after linking form tracks activities like validation , error handling*/}
        {/* when i type nothing and submit , there should be validation that input must be there and minlenght must be 2  */}
      </div>
      <br />
      <div>
        <label>Middle name : </label>
        <input {...register("middleName", { required: true, minLength: 2 })} />

      </div>
      <br />
      <div>

        <label>Last name : </label>
        <input {...register("lastName", { required: true, minLength: 2 })} />

      </div>
      <input type="submit" />
    </form>
  )
}

export default App
