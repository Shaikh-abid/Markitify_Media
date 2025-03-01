"use server";

import connectDB from "@/lib/Database.js";
import FormModel from "@/Models/FormData.js";

export async function submitFormAction(formData) {
  try {
    await connectDB();

    // Validate Required Fields
    const {
      name,
      email,
      company,
      findMore,
      services,
      features,
      budget,
      projectGoal,
    } = formData;
    if (!name || !email) {
      return { success: false, message: "Name and email are required!" };
    }

    // Save Form Data
    const newForm = new FormModel({
      name,
      email,
      company,
      findMore,
      services,
      features,
      budget,
      projectGoal,
    });
    await newForm.save();

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Error saving form:", error);
    return { success: false, message: "Server error! Please try again." };
  }
}
