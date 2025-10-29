import '../page.css';
export const metadata = {
  title: "Aviso de Privacidad | Hospital BNS",
  description:
    "Consulta el Aviso de Privacidad de Hospital BNS. Conoce cómo protegemos y utilizamos tus datos personales conforme a la ley.",
};

export default function AvisoDePrivacidadPage() {
  return (
  <section className="aviso_privacidad">
    <div className="container">
        <h1>Aviso de Privacidad</h1>
        <p><strong>Última actualización:</strong> 18 de octubre de 2025</p>

        <p>
        En <strong>Hospital BNS</strong>, ubicado en 
        <strong> C. Andrés Terán 1328, Lomas del Country, 44620 Guadalajara, Jal.</strong>,
        estamos comprometidos con la protección de los datos personales de nuestros pacientes,
        visitantes y colaboradores, conforme a lo establecido en la Ley Federal de Protección
        de Datos Personales en Posesión de los Particulares.
        </p>

        <h2>1. Datos personales que recabamos</h2>
        <p>
        Recabamos información personal que usted nos proporciona de forma directa, como nombre,
        teléfono, correo electrónico, fecha de nacimiento, antecedentes médicos y cualquier otro
        dato necesario para la prestación de nuestros servicios de salud.
        </p>

        <h2>2. Finalidades del tratamiento de datos</h2>
        <p>Los datos personales se utilizarán para las siguientes finalidades:</p>
        <ul>
        <li>Proveer los servicios médicos y psicológicos solicitados.</li>
        <li>Agendar y confirmar citas.</li>
        <li>Elaborar expedientes clínicos y emitir reportes médicos.</li>
        <li>Enviar información relacionada con tratamientos, seguimientos o recordatorios de citas.</li>
        <li>Cumplir con obligaciones legales y regulatorias aplicables al sector salud.</li>
        </ul>

        <h2>3. Protección y confidencialidad</h2>
        <p>
        Sus datos personales serán tratados con estrictas medidas de seguridad para garantizar su
        confidencialidad y evitar el acceso no autorizado, pérdida o alteración de la información.
        </p>

        <h2>4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
        <p>
        Usted puede ejercer sus derechos de acceso, rectificación, cancelación u oposición
        (ARCO) sobre sus datos personales enviando una solicitud al correo electrónico:
        <a href="mailto:recepcion@hospitalbns.com"> recepcion@hospitalbns.com</a>.
        </p>

        <h2>5. Transferencia de datos</h2>
        <p>
        Sus datos personales no serán compartidos con terceros sin su consentimiento,
        salvo cuando sea necesario para cumplir con obligaciones legales o por requerimiento
        de autoridades competentes.
        </p>

        <h2>6. Cambios al aviso de privacidad</h2>
        <p>
        Hospital BNS se reserva el derecho de modificar este aviso de privacidad en cualquier momento.
        Cualquier cambio será publicado en este mismo sitio web.
        </p>

        <h2>7. Contacto</h2>
        <p>
        Si tiene dudas o comentarios sobre este aviso de privacidad, puede contactarnos a través de:
        </p>
        <ul>
        <li>📍 Dirección: C. Andrés Terán 1328, Lomas del Country, 44620 Guadalajara, Jal.</li>
        <li>📧 Correo electrónico: <a href="mailto:recepcion@hospitalbns.com">recepcion@hospitalbns.com</a></li>
        <li>📞 Teléfono: <a href="tel:3338537217">333 853 7217</a></li>
        </ul>

        <p className="nota-legal">
        Hospital BNS agradece su confianza y garantiza el manejo responsable de su información personal.
        </p>
    </div>
    </section>
  );
}
