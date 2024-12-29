"use client";

import { useState, useEffect } from "react";
import "./Form.css";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import {z}from 'zod'
import { FormValidation } from "./zodValidation";

interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
  subject: string;
}

const Form: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormValidation>>({
    resolver: zodResolver(FormValidation),
  });

  const submission = handleSubmit(async (data: FormData) => {
    setLoading(true);
    const toastLoading = toast.loading("Please Wait...");
    try {
      const response = await axios.post("/api/form", JSON.stringify(data));
      if(response.data.success){
         toast.success(response.data.message)
      }else{
         toast.error(response.data.message)
      }
      reset();
    } catch (err: any) {
      toast.error(err?.message || "Something Went Wrong !!!");
    } finally {
      setLoading(false);
      toast.dismiss(toastLoading);
    }
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      for (const field in errors) {
        const err = errors[field as keyof typeof errors];
        if (err?.message) {
          toast.error(`${field.toUpperCase()}: ${err.message}`);
        }
      }
    }
  }, [errors]);

  return (
    <div id="FormDetail">
      <div className="contact-headings-form ">
        <h1 className="font-semibold">Let&apos;s Talk !</h1>
        <p>
          Get in touch with us using the enquiry form or contact details below
        </p>
      </div>

      <div
        id="FormDesign"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <form onSubmit={submission}>
          <input
            {...register("name")}
            placeholder="Your Name "
            required
            className="w-full"
          />

          <input
            {...register("contact")}
            placeholder="Contact No. "
            required
            className="w-full"
          />

          <input
            {...register("email")}
            placeholder="Your Email "
            required
            className="w-full"
          />

          <input
            {...register("subject")}
            placeholder="Subject "
            required
            className="w-full"
          />

          <input
            {...register("message")}
            placeholder="Your Message "
            className="textarea w-full"
            required
          />

          <div className="formButton">
            <button type="submit" style={{ backgroundColor: "red" }}>
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
