"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/prisma/prisma";
import { CreateDoctorFormSchema, CreateDoctorFormState } from "@/types";
import { error } from "console";

export async function createDoctor(prevState: CreateDoctorFormState, formData: FormData) {

  const validatedFields = CreateDoctorFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    hpr: formData.get('hpr'),
    citizenId: formData.get('citizenId'),
    dateOfBirth: formData.get('dateOfBirth'),
    gender: formData.get('gender'),
    mobile: formData.get('mobile'),
    email: formData.get('email'),

    speciality: formData.get('speciality'),
    sessions: formData.get('sessions'),
    education: formData.get('education'),
    status: formData.get('status'),

    address: formData.get('address'),
    city: formData.get('city'),
    country: formData.get('country'),
    postcode: formData.get('postcode'),
    relativeName: formData.get('relativeName'),
    relativeNumber: formData.get('relativeNumber'),
    description: formData.get('description'),
  });


  if (!validatedFields.success) {
    console.log(validatedFields.error.format());
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Doctor.',
    };
    // Handle the validation errors (e.g., displaying error messages to the user)
  } else {
    const data = validatedFields.data;

    try {
      const newDoctor = await prisma.doctor.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          hpr: data.hpr,
          citizenId: data.citizenId,
          dateOfBirth: new Date(data.dateOfBirth), // Make sure it's stored as a date
          gender: data.gender,
          mobile: data.mobile,
          email: data.email,

          speciality: data.speciality,
          sessions: data.sessions || null, // Optional fields can default to null if not provided
          education: data.education || null,
          status: data.status,

          address: data.address,
          city: data.city || null,
          country: data.country || null,
          postcode: data.postcode,
          relativeName: data.relativeName || null,
          relativeNumber: data.relativeNumber || null,
          description: data.description || null,
        },
      });

      console.log("Doctor created successfully:", newDoctor);
      // Handle success (e.g., redirect to another page or show success message)
      return {
        errors: {},
        message: 'Success! Doctor Created.',
      };
      revalidatePath('/doctors');
    } catch (error: any) {
      console.error("Error creating doctor:", error);
      // Handle database errors (e.g., display error message)
      return {
        errors: {},
        message: 'Database Error: ' + error.message,
      };
    }
  }

}