import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return <FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput
      id="task"
      list="task-suggestions"
      placeholder="Dê um nome para o seu projeto"
      disabled={!!activeCycle}
      {...register('task')}
    />

    <datalist id="task-suggestions">
      <option value="Projeto 1" />
      <option value="Projeto 2" />
      <option value="Projeto 3" />
    </datalist>

    <label htmlFor="minutesAmount">Durante</label>
    <MinutesAmountInput
      id="minutesAmount"
      type="number"
      step={5}
      min={0}
      max={60}
      placeholder="00"
      {...register('minutesAmount')}
    />

    <span>minutos.</span>
  </FormContainer>
}