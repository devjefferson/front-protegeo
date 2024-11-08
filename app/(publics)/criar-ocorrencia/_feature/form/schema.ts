import { differenceInYears } from 'date-fns'
import { z as zod } from 'zod'

export const SchemaFormOccurence = zod.object({
  end: zod.string({ required_error: 'O campo é obrigatório.' })
})