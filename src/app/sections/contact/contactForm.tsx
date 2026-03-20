'use client'
export default function ContactForm() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setTimeout(() => {
      event.currentTarget.reset()
    }, 1000)
  }

  return (
    <main className="bg-white">
      <section className="py-12 max-w-3xl mx-auto px-5 sm:px-7 lg:px-9 md:py-14 xl:py-16">
        <h2 className="text-4xl font-serif font-bold text-center mb-6">
          Send Us
          <span className="text-[#C9A227]"> A Message </span>
        </h2>
        <form action="https://formsubmit.co/sifonemmanuel1000@gmail.com" method="POST"
          onSubmit={handleSubmit} className="space-y-6"
        >
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-4 rounded-lg" required />
          
          <input type="email" name="email" placeholder="Your Email"
            className="w-full border p-4 rounded-lg" required
          />

          <textarea name="message" placeholder="Your Message"
            className="w-full border p-4 rounded-lg h-40 resize-none" required
          />

          <div className="sm:flex sm:justify-center">
            <button type="submit"
              className="bg-[#C9A227] border-[#C9A227] capitalize font-semibold text-white px-8 py-4 rounded-full hover:bg-[#b8931d] hover:border-[#b8931d] transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}