import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const DoctorScalarFieldEnumSchema = z.enum(['id','firstName','lastName','hpr','citizenId','dateOfBirth','gender','mobile','email','speciality','sessions','education','status','address','city','country','postcode','relativeName','relativeNumber','description']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// DOCTOR SCHEMA
/////////////////////////////////////////

export const DoctorSchema = z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  hpr: z.string(),
  citizenId: z.string(),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  mobile: z.string(),
  email: z.string(),
  speciality: z.string(),
  sessions: z.string().nullable(),
  education: z.string().nullable(),
  status: z.string(),
  address: z.string(),
  city: z.string().nullable(),
  country: z.string().nullable(),
  postcode: z.string(),
  relativeName: z.string().nullable(),
  relativeNumber: z.string().nullable(),
  description: z.string().nullable(),
})

export type Doctor = z.infer<typeof DoctorSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// DOCTOR
//------------------------------------------------------

export const DoctorSelectSchema: z.ZodType<Prisma.DoctorSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  hpr: z.boolean().optional(),
  citizenId: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  gender: z.boolean().optional(),
  mobile: z.boolean().optional(),
  email: z.boolean().optional(),
  speciality: z.boolean().optional(),
  sessions: z.boolean().optional(),
  education: z.boolean().optional(),
  status: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  country: z.boolean().optional(),
  postcode: z.boolean().optional(),
  relativeName: z.boolean().optional(),
  relativeNumber: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const DoctorWhereInputSchema: z.ZodType<Prisma.DoctorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DoctorWhereInputSchema),z.lazy(() => DoctorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DoctorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DoctorWhereInputSchema),z.lazy(() => DoctorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hpr: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  citizenId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  speciality: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  education: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  relativeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  relativeNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const DoctorOrderByWithRelationInputSchema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  hpr: z.lazy(() => SortOrderSchema).optional(),
  citizenId: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  speciality: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  education: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  relativeName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  relativeNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const DoctorWhereUniqueInputSchema: z.ZodType<Prisma.DoctorWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    citizenId: z.string(),
    mobile: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    citizenId: z.string(),
    mobile: z.string(),
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    citizenId: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    citizenId: z.string(),
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    mobile: z.string(),
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    hpr: z.string(),
  }),
  z.object({
    id: z.number().int(),
    citizenId: z.string(),
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    citizenId: z.string(),
    mobile: z.string(),
  }),
  z.object({
    id: z.number().int(),
    citizenId: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    citizenId: z.string(),
  }),
  z.object({
    id: z.number().int(),
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    mobile: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    hpr: z.string(),
    citizenId: z.string(),
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    hpr: z.string(),
    citizenId: z.string(),
    mobile: z.string(),
  }),
  z.object({
    hpr: z.string(),
    citizenId: z.string(),
    email: z.string(),
  }),
  z.object({
    hpr: z.string(),
    citizenId: z.string(),
  }),
  z.object({
    hpr: z.string(),
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    hpr: z.string(),
    mobile: z.string(),
  }),
  z.object({
    hpr: z.string(),
    email: z.string(),
  }),
  z.object({
    hpr: z.string(),
  }),
  z.object({
    citizenId: z.string(),
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    citizenId: z.string(),
    mobile: z.string(),
  }),
  z.object({
    citizenId: z.string(),
    email: z.string(),
  }),
  z.object({
    citizenId: z.string(),
  }),
  z.object({
    mobile: z.string(),
    email: z.string(),
  }),
  z.object({
    mobile: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  hpr: z.string().optional(),
  citizenId: z.string().optional(),
  mobile: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => DoctorWhereInputSchema),z.lazy(() => DoctorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DoctorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DoctorWhereInputSchema),z.lazy(() => DoctorWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  speciality: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  education: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  relativeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  relativeNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const DoctorOrderByWithAggregationInputSchema: z.ZodType<Prisma.DoctorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  hpr: z.lazy(() => SortOrderSchema).optional(),
  citizenId: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  speciality: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  education: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  relativeName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  relativeNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DoctorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DoctorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DoctorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DoctorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DoctorSumOrderByAggregateInputSchema).optional()
}).strict();

export const DoctorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DoctorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema),z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema),z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hpr: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  citizenId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mobile: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  speciality: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessions: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  education: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  postcode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  relativeName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  relativeNumber: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const DoctorCreateInputSchema: z.ZodType<Prisma.DoctorCreateInput> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  hpr: z.string(),
  citizenId: z.string(),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  mobile: z.string(),
  email: z.string(),
  speciality: z.string(),
  sessions: z.string().optional().nullable(),
  education: z.string().optional().nullable(),
  status: z.string(),
  address: z.string(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postcode: z.string(),
  relativeName: z.string().optional().nullable(),
  relativeNumber: z.string().optional().nullable(),
  description: z.string().optional().nullable()
}).strict();

export const DoctorUncheckedCreateInputSchema: z.ZodType<Prisma.DoctorUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  hpr: z.string(),
  citizenId: z.string(),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  mobile: z.string(),
  email: z.string(),
  speciality: z.string(),
  sessions: z.string().optional().nullable(),
  education: z.string().optional().nullable(),
  status: z.string(),
  address: z.string(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postcode: z.string(),
  relativeName: z.string().optional().nullable(),
  relativeNumber: z.string().optional().nullable(),
  description: z.string().optional().nullable()
}).strict();

export const DoctorUpdateInputSchema: z.ZodType<Prisma.DoctorUpdateInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hpr: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  citizenId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  speciality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  education: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  relativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relativeNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DoctorUncheckedUpdateInputSchema: z.ZodType<Prisma.DoctorUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hpr: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  citizenId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  speciality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  education: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  relativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relativeNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DoctorCreateManyInputSchema: z.ZodType<Prisma.DoctorCreateManyInput> = z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  hpr: z.string(),
  citizenId: z.string(),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  mobile: z.string(),
  email: z.string(),
  speciality: z.string(),
  sessions: z.string().optional().nullable(),
  education: z.string().optional().nullable(),
  status: z.string(),
  address: z.string(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postcode: z.string(),
  relativeName: z.string().optional().nullable(),
  relativeNumber: z.string().optional().nullable(),
  description: z.string().optional().nullable()
}).strict();

export const DoctorUpdateManyMutationInputSchema: z.ZodType<Prisma.DoctorUpdateManyMutationInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hpr: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  citizenId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  speciality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  education: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  relativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relativeNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DoctorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DoctorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hpr: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  citizenId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateOfBirth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  speciality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  education: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  relativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relativeNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const DoctorCountOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  hpr: z.lazy(() => SortOrderSchema).optional(),
  citizenId: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  speciality: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.lazy(() => SortOrderSchema).optional(),
  education: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  relativeName: z.lazy(() => SortOrderSchema).optional(),
  relativeNumber: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DoctorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DoctorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  hpr: z.lazy(() => SortOrderSchema).optional(),
  citizenId: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  speciality: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.lazy(() => SortOrderSchema).optional(),
  education: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  relativeName: z.lazy(() => SortOrderSchema).optional(),
  relativeNumber: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DoctorMinOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  hpr: z.lazy(() => SortOrderSchema).optional(),
  citizenId: z.lazy(() => SortOrderSchema).optional(),
  dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  speciality: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.lazy(() => SortOrderSchema).optional(),
  education: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  relativeName: z.lazy(() => SortOrderSchema).optional(),
  relativeNumber: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DoctorSumOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const DoctorFindFirstArgsSchema: z.ZodType<Prisma.DoctorFindFirstArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereInputSchema.optional(),
  orderBy: z.union([ DoctorOrderByWithRelationInputSchema.array(),DoctorOrderByWithRelationInputSchema ]).optional(),
  cursor: DoctorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DoctorScalarFieldEnumSchema,DoctorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DoctorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DoctorFindFirstOrThrowArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereInputSchema.optional(),
  orderBy: z.union([ DoctorOrderByWithRelationInputSchema.array(),DoctorOrderByWithRelationInputSchema ]).optional(),
  cursor: DoctorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DoctorScalarFieldEnumSchema,DoctorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DoctorFindManyArgsSchema: z.ZodType<Prisma.DoctorFindManyArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereInputSchema.optional(),
  orderBy: z.union([ DoctorOrderByWithRelationInputSchema.array(),DoctorOrderByWithRelationInputSchema ]).optional(),
  cursor: DoctorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DoctorScalarFieldEnumSchema,DoctorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DoctorAggregateArgsSchema: z.ZodType<Prisma.DoctorAggregateArgs> = z.object({
  where: DoctorWhereInputSchema.optional(),
  orderBy: z.union([ DoctorOrderByWithRelationInputSchema.array(),DoctorOrderByWithRelationInputSchema ]).optional(),
  cursor: DoctorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DoctorGroupByArgsSchema: z.ZodType<Prisma.DoctorGroupByArgs> = z.object({
  where: DoctorWhereInputSchema.optional(),
  orderBy: z.union([ DoctorOrderByWithAggregationInputSchema.array(),DoctorOrderByWithAggregationInputSchema ]).optional(),
  by: DoctorScalarFieldEnumSchema.array(),
  having: DoctorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DoctorFindUniqueArgsSchema: z.ZodType<Prisma.DoctorFindUniqueArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereUniqueInputSchema,
}).strict() ;

export const DoctorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DoctorFindUniqueOrThrowArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereUniqueInputSchema,
}).strict() ;

export const DoctorCreateArgsSchema: z.ZodType<Prisma.DoctorCreateArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  data: z.union([ DoctorCreateInputSchema,DoctorUncheckedCreateInputSchema ]),
}).strict() ;

export const DoctorUpsertArgsSchema: z.ZodType<Prisma.DoctorUpsertArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereUniqueInputSchema,
  create: z.union([ DoctorCreateInputSchema,DoctorUncheckedCreateInputSchema ]),
  update: z.union([ DoctorUpdateInputSchema,DoctorUncheckedUpdateInputSchema ]),
}).strict() ;

export const DoctorCreateManyArgsSchema: z.ZodType<Prisma.DoctorCreateManyArgs> = z.object({
  data: z.union([ DoctorCreateManyInputSchema,DoctorCreateManyInputSchema.array() ]),
}).strict() ;

export const DoctorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DoctorCreateManyAndReturnArgs> = z.object({
  data: z.union([ DoctorCreateManyInputSchema,DoctorCreateManyInputSchema.array() ]),
}).strict() ;

export const DoctorDeleteArgsSchema: z.ZodType<Prisma.DoctorDeleteArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  where: DoctorWhereUniqueInputSchema,
}).strict() ;

export const DoctorUpdateArgsSchema: z.ZodType<Prisma.DoctorUpdateArgs> = z.object({
  select: DoctorSelectSchema.optional(),
  data: z.union([ DoctorUpdateInputSchema,DoctorUncheckedUpdateInputSchema ]),
  where: DoctorWhereUniqueInputSchema,
}).strict() ;

export const DoctorUpdateManyArgsSchema: z.ZodType<Prisma.DoctorUpdateManyArgs> = z.object({
  data: z.union([ DoctorUpdateManyMutationInputSchema,DoctorUncheckedUpdateManyInputSchema ]),
  where: DoctorWhereInputSchema.optional(),
}).strict() ;

export const DoctorDeleteManyArgsSchema: z.ZodType<Prisma.DoctorDeleteManyArgs> = z.object({
  where: DoctorWhereInputSchema.optional(),
}).strict() ;