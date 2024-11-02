import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Une erreur est survenue' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Erreur lors de l\'envoi du message' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Me Contacter
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-xl"
        >
          {status.message && (
            <div
              className={`p-4 rounded ${
                status.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
              }`}
            >
              {status.message}
            </div>
          )}
          
          <div>
            <label className="block mb-2">Nom</label>
            <input
              type="text"
              value={formData.name}
              className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              value={formData.message}
              className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none h-32"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors ${
              isLoading
                ? 'bg-blue-800 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <Send className="w-4 h-4" />
            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;