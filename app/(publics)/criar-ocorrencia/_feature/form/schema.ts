import { differenceInYears } from 'date-fns'
import { z as zod } from 'zod'

export const SchemaFormOccurence = zod.object({
  street: zod.string({ required_error: 'O campo é obrigatório.' }),
  lat: zod.number({ required_error: 'O campo é obrigatório.' }),
  lng: zod.number({ required_error: 'O campo é obrigatório.' }),
  title: zod.string({ required_error: 'O campo é obrigatório.' }),
  description: zod.string({ required_error: 'O campo é obrigatório.' }),
  hour: zod.string({ required_error: 'O campo é obrigatório.' }),
  user_id: zod.string().optional(),
  visit_count: zod.number().optional(),
  likes: zod.number().optional(),

})