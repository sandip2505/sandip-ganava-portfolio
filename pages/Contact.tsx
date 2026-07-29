import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

type FormInputs = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // TODO: Replace with actual Web3Forms access key
          ...data
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Sandip Ganava | Hire Full-Stack Developer</title>
        <meta name="description" content="Get in touch with Sandip Ganava for your web and mobile app projects. Available for freelance and contract work." />
      </Helmet>

      <section className="py-16 bg-white dark:bg-dark-bg min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 dark:bg-dark-bg p-8 rounded-2xl border border-gray-100 dark:border-dark-border">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white dark:bg-dark-surface p-3 rounded-lg text-primary-600 shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">Email Me</p>
                      <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-900 dark:text-white font-medium hover:text-primary-600">{SOCIAL_LINKS.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white dark:bg-dark-surface p-3 rounded-lg text-primary-600 shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">Call Me</p>
                      <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-gray-900 dark:text-white font-medium hover:text-primary-600">{SOCIAL_LINKS.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white dark:bg-dark-surface p-3 rounded-lg text-primary-600 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">Location</p>
                      <p className="text-gray-900 dark:text-white font-medium">Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-border">
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for freelance projects
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-border">
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Service</label>
                    <select
                      {...register("service", { required: "Please select a service" })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="WordPress">WordPress</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-gray-700 dark:text-gray-300">Budget Range</label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none"
                    >
                      <option value="Not sure">Not sure</option>
                      <option value="<$1000">&lt; $1000</option>
                      <option value="$1000-$5000">$1000 - $5000</option>
                      <option value="$5000+">$5000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Description</label>
                  <textarea
                    {...register("message", { required: "Message is required", minLength: { value: 20, message: "Please describe your project in at least 20 chars" } })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Tell me about your project goals, timeline, and requirements..."
                  ></textarea>
                  {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}