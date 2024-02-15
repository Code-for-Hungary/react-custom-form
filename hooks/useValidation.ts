import useForm from "@/hooks/useForm";

const useValidation = (validations) => {
  const { state } = useForm()

  return {
    errors: {
      inp2: validations.inp2(state.inp2)
    }
  }
}

export default useValidation
