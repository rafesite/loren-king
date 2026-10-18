import { useState } from 'react';
import { Mail, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';

type FormData = {
  fullName: string;
  organization: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  audienceSize: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EVENT_TYPES = [
  'Keynote / Conference',
  'Continuing Education',
  'Workshop / Team Training',
  'Panel Moderation',
  'Podcast / Interview',
  'Webinar / Virtual',
  'Other',
];

const EMPTY: FormData = {
  fullName: '',
  organization: '',
  email: '',
  eventType: '',
  eventDate: '',
  location: '',
  audienceSize: '',
  message: '',
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Please enter your name';
  if (!data.organization.trim()) errors.organization = 'Please tell us your organization';
  if (!data.email.trim()) errors.email = 'Please enter an email';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email';
  if (!data.eventType) errors.eventType = 'Please select an event type';
  if (!data.message.trim()) errors.message = 'Please share a few details';
  return errors;
}

export default function Contact() {
  const { ref, visible } = useInView(0.1);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('submitting');
    try {
      const { error } = await supabase.from('speaking_inquiries').insert({
        full_name: form.fullName.trim(),
        organization: form.organization.trim(),
        email: form.email.trim(),
        event_type: form.eventType,
        event_date: form.eventDate.trim() || null,
        location: form.location.trim() || null,
        audience_size: form.audienceSize.trim() || null,
        message: form.message.trim(),
      });

      if (error) throw error;
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      console.error('Inquiry submission failed:', err);
    }
  };

  const fieldError = (name: keyof FormData) =>
    errors[name] && (
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: '#c9806a',
          margin: '6px 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <AlertCircle size={11} strokeWidth={1.5} />
        {errors[name]}
      </p>
    );

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: '#0a0a0a',
        padding: 'clamp(90px, 14vh, 160px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(24px, 5vw, 56px)' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: 'clamp(48px, 7vw, 96px)' }}>
          {/* Left — invitation + email */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <p className="eyebrow" style={{ marginBottom: 28 }}>
              Book Loren to Speak
            </p>
            <h2
              className="serif-display"
              style={{
                fontSize: 'clamp(40px, 5.5vw, 68px)',
                color: '#f4f4f3',
                margin: '0 0 32px',
              }}
            >
              Let's Build Something Meaningful
            </h2>
            <div className="divider" style={{ marginBottom: 32 }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(230,230,227,0.7)',
                margin: '0 0 36px',
                maxWidth: 420,
              }}
            >
              Planning a conference, educational program, or team event? Share a few details and Loren's
              team will respond within 2–3 business days.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'rgba(230,230,227,0.45)',
                    margin: '0 0 8px',
                  }}
                >
                  Direct Email
                </p>
                <a
                  href="mailto:support@connectwithloren.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 300,
                    color: '#f4f4f3',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(244,244,243,0.6)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#f4f4f3')}
                >
                  <Mail size={16} strokeWidth={1.5} color="rgba(255,255,255,0.6)" />
                  support@connectwithloren.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — form / success */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
            {status === 'success' ? (
              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: 'clamp(40px, 7vw, 80px) clamp(28px, 5vw, 56px)',
                  textAlign: 'center',
                  minHeight: 420,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 24,
                  animation: 'preFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={28} strokeWidth={1.5} color="#f4f4f3" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    color: '#f4f4f3',
                    margin: 0,
                  }}
                >
                  Inquiry Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(230,230,227,0.65)',
                    margin: 0,
                    maxWidth: 360,
                  }}
                >
                  Thank you for reaching out. Loren's team will be in touch within 2–3 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost"
                  style={{ marginTop: 8, textDecoration: 'none', cursor: 'pointer' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <div className="contact-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 32px)' }}>
                    <div>
                      <label className="field-label">Full Name *</label>
                      <input name="fullName" value={form.fullName} onChange={handleChange} className="field" placeholder="Jane Doe" />
                      {fieldError('fullName')}
                    </div>
                    <div>
                      <label className="field-label">Organization *</label>
                      <input name="organization" value={form.organization} onChange={handleChange} className="field" placeholder="Your company or conference" />
                      {fieldError('organization')}
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="field" placeholder="you@organization.com" />
                    {fieldError('email')}
                  </div>

                  <div className="contact-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 32px)' }}>
                    <div>
                      <label className="field-label">Event Type *</label>
                      <select name="eventType" value={form.eventType} onChange={handleChange} className="field" style={{ color: form.eventType ? '#f4f4f3' : 'rgba(230,230,227,0.35)' }}>
                        <option value="" disabled>
                          Select a type
                        </option>
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {fieldError('eventType')}
                    </div>
                    <div>
                      <label className="field-label">Event Date</label>
                      <input name="eventDate" value={form.eventDate} onChange={handleChange} className="field" placeholder="Tentative or confirmed" />
                    </div>
                  </div>

                  <div className="contact-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 32px)' }}>
                    <div>
                      <label className="field-label">Location</label>
                      <input name="location" value={form.location} onChange={handleChange} className="field" placeholder="City, state, or virtual" />
                    </div>
                    <div>
                      <label className="field-label">Audience Size</label>
                      <input name="audienceSize" value={form.audienceSize} onChange={handleChange} className="field" placeholder="Approximate number" />
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="field" placeholder="Tell us about your event and what you're hoping for" rows={4} style={{ resize: 'vertical', paddingTop: 14 }} />
                    {fieldError('message')}
                  </div>

                  {status === 'error' && (
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: '#c9806a',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <AlertCircle size={13} strokeWidth={1.5} />
                      Something went wrong submitting your inquiry. Please try again or email directly.
                    </p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary"
                      style={{ cursor: status === 'submitting' ? 'wait' : 'pointer', opacity: status === 'submitting' ? 0.6 : 1 }}
                    >
                      {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                      {status !== 'submitting' && <ArrowRight size={14} strokeWidth={1.5} />}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .field-label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(230,230,227,0.5);
          margin-bottom: 4px;
        }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-row { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
