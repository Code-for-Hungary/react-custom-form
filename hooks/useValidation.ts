import useForm from "@/hooks/useForm";

const useValidation = (validations) => {
  const { state } = useForm()

  return {
    errors: {
      inp1: validations.inp1(state.inp1, state),
      inp2: validations.inp2(state.inp2, state),
    }
  }
}

export default useValidation
