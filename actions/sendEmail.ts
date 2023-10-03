"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (forumData: FormData) => {
  const senderEmail = forumData.get("senderEmail");
  const senderMessage = forumData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact For<onboarding@resend.dev>",
      to: "aareeb1999@gmail.com",
      subject: "Message from Portfolio Contact",

      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
