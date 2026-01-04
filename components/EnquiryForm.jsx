export default function EnquiryForm() {
  return (
    <section>
      <h2>Enquiry Form</h2>
      <form>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" placeholder="Your phone" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="How can we help?" />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
