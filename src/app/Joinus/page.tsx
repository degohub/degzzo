"use client";

import Image from "next/image";
import { useState } from "react";

const forms = {
  project: {
    title: "Project Inquiry",
    placeholder: "Describe your project needs...",
  },
  jobs: {
    title: "Jobs / Careers",
    placeholder: "Why are you a good fit for this role?",
  },
  general: {
    title: "General Inquiry",
    placeholder: "How can we help you?",
  },
};

export default function ExpertContactSection() {
  const [selectedForm, setSelectedForm] = useState<"project" | "jobs" | "general">("project");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const res = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          setStatus("success");
          if (form && form.reset) {
            form.reset();
          }
        } else {
          setStatus("error");
        }

        setSending(false);

        // Auto clear message after 4 seconds
        setTimeout(() => setStatus(null), 4000);
      };



  return (
    <section className="bg-[#1A1035] text-white px-6 py-20">
          <div className="">
            {status && (
            <div className={`fixed top-5 right-5 px-4 py-2 rounded text-white shadow-lg z-50 ${
              status === "success" ? "bg-green-500" : "bg-red-500"
            }`}>
              {status === "success" ? "✅ Message sent successfully!" : "❌ Failed to send message."}
            </div>
          )}

            
          </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column – Info */}
        <div>
          <Image
            src="/200X200-logo.png"
            alt="Ameet Palkar"
            width={250}
            height={250}
            className="rounded-xl object-cover shadow-lg mb-6"
          />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talk to our research expert</h2>
          <p className="text-gray-300 mb-4">Struggling with user engagement? We help you turn ideas into experiences.</p>
          <p className="text-lg font-semibold">Ameet Palkar</p>
          <p className="text-sm text-gray-400 mb-6">Design Director</p>

          
        </div>

        {/* Right Column – Form */}
        <div className="bg-white p-6 rounded-xl text-black shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{forms[selectedForm].title}</h3>
          <div className="flex text-xs gap-3 xl:text-xl py-5 xl:py-0">
            {(["project", "jobs", "general"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedForm(type)}
                className={`px-4 py-2 xl:my-5 rounded-full border ${
                  selectedForm === type
                    ? "bg-red-500 text-white "
                    : "border-gray-500 text-black hover:bg-red-500 hover:text-white"
                }`}
              >
                {type === "project" ? "Project" : type === "jobs" ? "Jobs / Careers" : "General"}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <input name="type" type="hidden" value={selectedForm} />
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <textarea
              name="message"
              placeholder={forms[selectedForm].placeholder}
              rows={4}
              className="w-full border px-4 py-2 rounded"
              required
            />
            {selectedForm === "jobs" && (
              <input
                name="resumeLink"
                type="url"
                placeholder="Resume or portfolio link"
                className="w-full border px-4 py-2 rounded"
                required
              />
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"} 
            </button>
          </form>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 xl:px-30 xl:text-2xl text-gray-300">
        <p>
          Email:{" "}
          <a href="mailto:info.degzzo@gmail.com" className="">info.degzzo@gmail.com</a>
        </p>
        <p className="mt-1">Address: 123 Creative Street, Design City, CA 90001</p>
        <button className="bg-blue-400 hover:bg-blue-500 text-white my-5 py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20expert%20for%20Meeting", "hii Degzzo")}>
        Let&rsquo;s talk
      </button>
      </div>
      
    </section>
  );
}
