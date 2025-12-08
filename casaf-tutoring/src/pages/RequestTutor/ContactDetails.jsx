import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ContactDetails({ next, back, update, formData }) {
  
  // --- VALIDATION SCHEMA ---
  const schema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email")], "Emails do not match")
      .required("Confirm your email"),
    phone: Yup.string().required("Phone number is required"),
    countryCode: Yup.string().required("Choose country code"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: formData.fullName || "",
      email: formData.email || "",
      confirmEmail: formData.confirmEmail || "",
      phone: formData.phone || "",
      countryCode: formData.countryCode || "+44",
    },
  });

  // Sync local state with global formData if user clicks Back
  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      setValue(key, formData[key]);
    });
  }, [formData, setValue]);

  // Submit handler
  const onSubmit = (data) => {
    update(data);
    next();
  };

  return (
    <div className="bg-white shadow-md rounded-3xl p-8 md:p-10">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Contact <span className="text-orange-500">details</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* FULL NAME */}
        <div>
          <input
            type="text"
            placeholder="Full name"
            {...register("fullName")}
            className={`w-full p-4 rounded-xl border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`w-full p-4 rounded-xl border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* CONFIRM EMAIL */}
        <div>
          <input
            type="email"
            placeholder="Confirm your email"
            {...register("confirmEmail")}
            className={`w-full p-4 rounded-xl border ${
              errors.confirmEmail ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmEmail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmEmail.message}
            </p>
          )}
        </div>

        {/* PHONE ROW */}
        <div className="grid grid-cols-3 gap-4">
          <select
            {...register("countryCode")}
            className={`p-4 rounded-xl border ${
              errors.countryCode ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="+44">United Kingdom (+44)</option>
            <option value="+1">USA (+1)</option>
            <option value="+237">Cameroon (+237)</option>
            <option value="+91">India (+91)</option>
          </select>

          <div className="col-span-2">
            <input
              type="text"
              placeholder="Phone number"
              {...register("phone")}
              className={`w-full p-4 rounded-xl border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* CAPTCHCA SECTION */}
        <div className="mt-4">
          <div
            className="g-recaptcha"
            data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
          ></div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={back}
            className="px-6 py-3 bg-gray-300 rounded-xl text-gray-700 text-lg"
          >
            Previous
          </button>

          <button
            type="submit"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}