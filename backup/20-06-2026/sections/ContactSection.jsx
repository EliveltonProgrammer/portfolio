import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import FadeInSection from "../components/FadeInSection";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "../components/ui/card";

import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const validarCamposInterno = () => {
    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setErro(
        "Por favor, preencha todos os campos antes de enviar."
      );

      return false;
    }

    if (!email.includes("@")) {
      setErro("Informe um e-mail válido.");
      return false;
    }

    return true;
  };

  const enviarParaWhatsapp = () => {
    setErro("");

    if (!validarCamposInterno()) return;

    setLoading(true);

    const texto =
      `Olá, meu nome é ${name}. ` +
      `${message} | ` +
      `Telefone: ${phone}, ` +
      `E-mail: ${email}`;

    const numero = "5515996697754";

    const link =
      `https://wa.me/${numero}?text=` +
      encodeURIComponent(texto);

    setTimeout(() => {
      window.open(link, "_blank");
      setLoading(false);
    }, 700);
  };

  return (
    <FadeInSection>
      <section
        id="contact"
        className="py-20 container mx-auto px-4"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <FiMail className="text-blue-400" />
            Contato
          </h2>

          <p className="text-sm text-gray-500 mb-7">
            Entre em contato comigo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle>
                Contate-me
              </CardTitle>

              <CardDescription>
                Preencha o formulário abaixo com sua mensagem.

                {erro && (
                  <p className="text-red-500 font-medium mt-3">
                    {erro}
                  </p>
                )}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Nome Completo
                </label>

                <Input
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Telefone
                </label>

                <Input
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  E-mail
                </label>

                <Input
                  type="email"
                  placeholder="email@dominio.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Mensagem
                </label>

                <Textarea
                  rows={4}
                  placeholder="Sua mensagem..."
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                />
              </div>

              <Button
                onClick={enviarParaWhatsapp}
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2
                  ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                  }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaWhatsapp />
                    Enviar via WhatsApp
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </FadeInSection>
  );
}

export default ContactSection;