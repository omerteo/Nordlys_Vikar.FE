"use client"

import { useFormState } from 'react-dom';//Replace with useFormState in newer React versions
import { Button } from "@/components/Shared/Button/Button"

import { CreateDoctorFormState } from "@/types";
import { createDoctor } from "@/lib/actions/doctor";
import { Textbox } from '@/components/Shared/Textbox/Textbox';
import { FormControl } from '@/components/Shared/FormControl/FormControl';
import { Select } from '@/components/Shared/Select/Select';


export default function Form() {
    const initialState: CreateDoctorFormState = { message: null, errors: {} };
    const [state, formAction] = useFormState(createDoctor, initialState);

    const blockClass = "block flex @md:flex-row @xs:flex-col flex-wrap";
    const halfElClass = "basis-1/2 xs:basis-full";

    return (
        <form
            action={formAction}
        >
            <fieldset className={`${blockClass}`}>
                <legend>Personal</legend>
                <div className={`${halfElClass}`}>
                    <FormControl label="First mame">
                        <Textbox name="firstName" placeholder="Name" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Last name" >
                        <Textbox name="lastName" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="ID (HPR)" >
                        <Textbox name="hpr" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Personnumber (ID-citizen number)">
                        <Textbox name="citizenId" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Date of birth" >
                        <Textbox type="date" required name="dateOfBirth" />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Gender" >
                        <Select required name="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Mobile number">
                        <Textbox name="mobile" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="E-mail" >
                        <Textbox name="email" required />
                    </FormControl>
                </div>
            </fieldset>

            <fieldset className={`${blockClass}`}>
                <legend>Professional</legend>
                <div className={`${halfElClass}`}>
                    <FormControl label="Speciality">
                        <Textbox name="speciality" placeholder="General Practitioner" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Sessions">
                        <Textbox name="sessions" placeholder="e.g. 30 hours per week" />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Education">
                        <Textbox name="education" placeholder="e.g. University of Oslo" />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Status">
                        <input type="radio" name="status" value="active" /> Active
                        <input type="radio" name="status" value="inactive" /> In-active
                    </FormControl>
                </div>
            </fieldset>

            <fieldset className={`${blockClass}`}>
            <legend>Contact</legend>
            <div className={`${halfElClass}`}>
                    <FormControl label="Address">
                        <Textbox name="address" placeholder="" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="City">
                        <Textbox name="city" placeholder="" />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Country">
                        <Textbox name="country" placeholder="" />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Postal code">
                        <Textbox name="postcode" placeholder="" required />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Relative name">
                        <Textbox name="relativeName" placeholder="" />
                    </FormControl>
                </div>
                <div className={`${halfElClass}`}>
                    <FormControl label="Relative number">
                        <Textbox name="relativeNumber" placeholder="" />
                    </FormControl>
                </div>
                <div className="basis-1">
                    <textarea name="description" placeholder="Description" />
                </div>

            </fieldset>

            <Textbox name="" />

            <div aria-live="polite" aria-atomic="true">
                {state && state.message ? (
                    <p className="mt-2 text-sm text-red-500">{state.message}</p>
                ) : null}
            </div>

            <Button>Create</Button>
        </form >
    )
}
