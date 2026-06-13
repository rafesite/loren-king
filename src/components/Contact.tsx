import { useState } from 'react';
import { Calendar, Mail, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type FormData = {
  fullName: string;
  organization: string;
  eventDate: string;
  eventType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const TOPICS = [
  'Human Trafficking in Healthcare (required CE in many states)',
  'Artificial Intelligence in Dentistry',
  'Airway & Sleep Apnea',
  'Dental Hygiene Education',
];

const EVENT_TYPES = ['Conference', 'CE Course', 'Workshop', 'Webinar', 'Other'];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  if (!data.organization.trim()) errors.organization = 'Organization is required';
  if (!data.eventDate.trim()) errors.eventDate = 'Event date is required';
  if (!data.eventType) errors.eventType = 'Please select an event type';
  if (!data.message.trim()) errors.message = 'Message is required';
  return errors;
}

const FIELD_STYLE: React.CSSProperties = {
  width: '100%',
  background: '#1a1a1a',
  border: '1px solid rgba(201,168,76,0.18)',
  color: '#F5F0E8',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 13,
  padding: '13px 16px',
  outline: 'none',
  transition: 'border-color 0.25s ease',
};

export default function Contact() {
  const { ref, visible } = useInView(0.06);

  const [form, setForm] = useState<FormData>({
    fullName: '',
    organization: '',
    eventDate: '',
    eventType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    window.location.href = `mailto:support@connectwithloren.com?subject=Speaking Inquiry — ${form.organization}&body=Name: ${form.fullName}%0AOrganization: ${form.organization}%0AEvent Date: ${form.eventDate}%0AEvent Type: ${form.eventType}%0A%0A${form.message}`;
    setSubmitted(true);
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    ...FIELD_STYLE,
    borderColor:
      errors[name as keyof FormData]
        ? 'rgba(200,80,60,0.6)'
        : focusedField === name
        ? 'rgba(201,168,76,0.6)'
        : 'rgba(201,168,76,0.18)',
  });

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#080808', padding: '100px 0' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginBottom: 52 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>Get In Touch</p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 50px)',
              color: '#F5F0E8',
              lineHeight: 1.1,
              marginBottom: 10,
            }}
          >
            Book Loren to Speak
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              color: '#888880',
              marginBottom: 18,
            }}
          >
            If you're planning a conference, educational program, or team event — let's connect.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              color: '#C9A84C',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Currently booking into 2028
          </p>

          {/* Topics */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
            {TOPICS.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  color: '#888880',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '5px 12px',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 52,
          }}
          className="flex flex-col lg:grid"
        >
          {/* Left — Form */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 20,
                  padding: '60px 40px',
                  background: '#111111',
                  border: '1px solid rgba(201,168,76,0.25)',
                  textAlign: 'center',
                  minHeight: 400,
                }}
              >
                <CheckCircle size={44} color="#C9A84C" strokeWidth={1.5} />
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 700,
                    fontSize: 28,
                    color: '#F5F0E8',
                    margin: 0,
                  }}
                >
                  Inquiry Sent
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 14,
                    color: '#888880',
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  Thank you for reaching out. Loren's team will be in touch within 2–3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Full Name */}
                  <div>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Full Name *"
                      style={fieldStyle('fullName')}
                    />
                    {errors.fullName && (
                      <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#C87A5A', marginTop: 4 }}>
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <input
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('organization')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Organization / Conference Name *"
                      style={fieldStyle('organization')}
                    />
                    {errors.organization && (
                      <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#C87A5A', marginTop: 4 }}>
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  {/* Event Date + Type row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <input
                        name="eventDate"
                        value={form.eventDate}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('eventDate')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Event Date *"
                        style={fieldStyle('eventDate')}
                      />
                      {errors.eventDate && (
                        <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#C87A5A', marginTop: 4 }}>
                          {errors.eventDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('eventType')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...fieldStyle('eventType'),
                          color: form.eventType ? '#F5F0E8' : '#555550',
                        }}
                      >
                        <option value="" disabled style={{ color: '#555' }}>
                          Event Type *
                        </option>
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t} style={{ background: '#1a1a1a', color: '#F5F0E8' }}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#C87A5A', marginTop: 4 }}>
                          {errors.eventType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your event *"
                      rows={5}
                      style={{ ...fieldStyle('message'), resize: 'vertical' }}
                    />
                    {errors.message && (
                      <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#C87A5A', marginTop: 4 }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gold-solid"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    Send Inquiry
                    <Send size={12} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right — Quick Connect */}
          <div
            className={`reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s', display: 'flex', flexDirection: 'column', gap: 28 }}
          >
            <div
              style={{
                background: '#111111',
                border: '1px solid rgba(201,168,76,0.18)',
                padding: '36px 32px',
              }}
            >
              <p className="section-eyebrow" style={{ marginBottom: 20 }}>Quick Connect</p>

              {/* Calendly CTA */}
              <a
                href="#calendly"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: '#C9A84C',
                  color: '#080808',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '16px 24px',
                  textDecoration: 'none',
                  marginBottom: 24,
                  transition: 'opacity 0.25s ease, transform 0.2s ease',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.01)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                }}
              >
                <Calendar size={16} />
                Schedule a Discovery Call
              </a>

              {/* Or divider */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.15)' }} />
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 10,
                    color: '#888880',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  or email directly
                </span>
                <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.15)' }} />
              </div>

              <a
                href="mailto:support@connectwithloren.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: '#C9A84C',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
                onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                <Mail size={15} strokeWidth={1.5} />
                support@connectwithloren.com
              </a>
            </div>

            {/* Availability note */}
            <div
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.15)',
                padding: '24px 28px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: '#F5F0E8',
                  margin: '0 0 8px',
                  lineHeight: 1.4,
                }}
              >
                "Let's build something meaningful together."
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12,
                  color: '#888880',
                  margin: 0,
                }}
              >
                — Loren King
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
