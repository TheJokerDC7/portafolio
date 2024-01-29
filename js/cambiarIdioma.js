document.addEventListener('DOMContentLoaded', function () {
    const toggleIdioma = document.getElementById('toggleIdioma');
    const mensajeElement = document.getElementById('mensajeElement');
    const saludoElement = document.getElementById('saludoElement');
    const presentElement = document.getElementById('presentElement');
    const meElement = document.getElementById('meElement');
    const designerElement = document.getElementById('designerElement');
    const subskill1Element = document.getElementById('subskill1Element');
    const sub2skill1Element = document.getElementById('sub2skill1Element');
    const sub3skill1Element = document.getElementById('sub3skill1Element');
    const developerElement = document.getElementById('developerElement');
    const subskill2Element = document.getElementById('subskill2Element');
    const sub2skill2Element = document.getElementById('sub2skill2Element');
    const sub3skill2Element = document.getElementById('sub3skill2Element');
    const subskill3Element = document.getElementById('subskill3Element');
    const sub2skill3Element = document.getElementById('sub2skill3Element');
    const sub3skill3Element = document.getElementById('sub3skill3Element');
    const sub4skill3Element = document.getElementById('sub4skill3Element');
    const mentorElement = document.getElementById('mentorElement');
    const mentor1Element = document.getElementById('mentor1Element');
    const mentor2Element = document.getElementById('mentor2Element');
    const mentor3Element = document.getElementById('mentor3Element');
    const contactameElement = document.getElementById("contactameElement");
    const form1Element = document.getElementById("form1Element");
    const form2Element = document.getElementById("form2Element");
    const form3Element = document.getElementById("form3Element");
    const form4Element = document.getElementById("form4Element");
    const form5Element = document.getElementById("form5Element"); 
    const trabajoElement = document.getElementById("trabajoElement");
    const card1Element = document.getElementById("card1Element");
    const card2Element = document.getElementById("card2Element");
    const card3Element = document.getElementById("card3Element");
    const card4Element = document.getElementById("card4Element");
    const card5Element = document.getElementById("card5Element");
    const card6Element = document.getElementById("card6Element");
    

    // Obtener el idioma actual al cargar la página desde localStorage
    const idiomaInicial = obtenerIdiomaActual();

    // Cargar la página con el idioma inicial
    actualizarMensaje(idiomaInicial);

    // Agregar un listener al cambio del toggle
    toggleIdioma.addEventListener('change', function () {
        const nuevoIdioma = toggleIdioma.checked ? 'es' : 'en';
        actualizarMensaje(nuevoIdioma);

        // Almacenar la preferencia de idioma en localStorage
        guardarIdiomaActual(nuevoIdioma);
    });

    function obtenerIdiomaActual() {
        // Obtener la preferencia de idioma desde localStorage
        return localStorage.getItem('idioma') || 'es';
    }

    function actualizarMensaje(idioma) {
        // Actualizar el mensaje y saludo según el idioma seleccionado
        if (idioma === 'en') {
            mensajeElement.textContent = "Designer, Frontend Developer & Mentor";
            saludoElement.textContent = "I design and code beautifully simple things, and I love what I do.";
            presentElement.textContent = "Hi, I'm Daniel. Nice to meet you.";
            meElement.textContent = "Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.";
            designerElement.textContent = "Designer";
            subskill1Element.textContent = "I value simple content structure, clean design patterns, and thoughtful interactions.";
            sub2skill1Element.textContent = "Things I enjoy designing:";
            sub3skill1Element.textContent = "Designer Tools:";
            developerElement.textContent = "Frontend Developer";
            subskill2Element.textContent = "I like to code things from scratch, and enjoy bringing ideas to life in the browser.";
            sub2skill2Element.textContent = "Technologies use:";
            sub3skill2Element.textContent = "Dev Tools:";
            subskill3Element.textContent = "I genuinely care about people, and enjoy helping them work on their craft.";
            sub2skill3Element.textContent = "Experiences I draw from:";
            sub3skill3Element.textContent = "UX/UI, Product design, Informatic security";
            sub4skill3Element.textContent = "Mentor Stats:";
            mentorElement.textContent = "8+ years experience";
            mentor1Element.textContent = "3+ short courses";
            mentor2Element.textContent = "50+ students";
            mentor3Element.textContent = "25+ mentor sessions";
            contactameElement.textContent ="Contact me";
            form1Element.textContent="Thanks for taking the time to reach out. How can I help you today?";
            form2Element.textContent="Name";
            form3Element.textContent="Email";
            form4Element.textContent="Message";
            form5Element.textContent="Send message";
            trabajoElement.textContent="My Recent Works";
            card1Element.textContent="Naraconstruc is a company that presents itself as a socially responsible organization that contributes to the success of its clients' projects through the efficient use of its resources and with a clear social and environmental awareness that contributes to well-being economic of the country.";
            card2Element.textContent="Naranjo Jurídico is a business unit belonging to Holding JL Naranjo that provides its services based in Guayaquil-Ecuador. Its highly qualified team of professionals provides legal advice and representation in litigation in areas of corporate rights, civil, notarial, tax, intellectual and administrative.";
            card3Element.textContent="Royal Academy Express is an academy focused on activities that enable transformation of entrepreneurs, companies and businesses, seeking the implementation of methodologies that promote innovation and improved profitability.";
            card4Element.textContent="Gerente Cyber Express is a strategic business unit in charge of execution, constitution and sale of properly structured commercial franchises.";
            card5Element.textContent="Royal Bakana is a real estate agency specialized in helping its clients find the investment options most suitable for your needs and interests in the market real estate.";
            card6Element.textContent="Tesis en 15 días is a comprehensive research and development company with improvement continuous is made up of a multidisciplinary team of competent professionals who work to offer agile and effective solutions in response to the requirements of their customers.";
            
        } else {
            mensajeElement.textContent = "Diseñador, Desarrollador Frontend y Mentor";
            saludoElement.textContent = "Diseño y codifico cosas maravillosamente simples y amo lo que hago.";
            presentElement.textContent ="Hola, soy Daniel. Encantado de conocerte";
            meElement.textContent = "Desde que empecé mi trayectoria como diseñador independiente hace 12 años, he realizado trabajos remotos para diversas agencias, brindado asesoramiento a nuevas empresas y colaborado con personas talentosas para crear productos digitales tanto para el ámbito empresarial como para el consumo general.";
            designerElement.textContent = "Diseñador";
            subskill1Element.textContent = "Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.";
            sub2skill1Element.textContent = "Áreas de especialización en diseño que me apasionan:";
            sub3skill1Element.textContent = "Herramientas de diseño:";
            developerElement.textContent = "Desarrollador Frontend";
            subskill2Element.textContent = "Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.";
            sub2skill2Element.textContent = "Tecnologías que manejo:"
            sub3skill2Element.textContent = "Herramientas de desarrollo:";
            subskill3Element.textContent = "Mi verdadera preocupación radica en las personas, y encuentro satisfacción en asistirlas en el desarrollo de sus habilidades profesionales.";
            sub2skill3Element.textContent = "Áreas de experiencia:";
            sub3skill3Element.textContent = "UX/UI, Diseño de producto y Seguridad Informática";
            sub4skill3Element.textContent = "Experiencia:";
            mentorElement.textContent = "8+ años de experiencia";
            mentor1Element.textContent = "3+ cursos cortos";
            mentor2Element.textContent = "50+ estudiantes";
            mentor3Element.textContent = "25+ sesiones de tutoría";
            contactameElement.textContent ="Contáctame";
            form1Element.textContent="Gracias por tomarse el tiempo para comunicarse. ¿Cómo puedo ayudarte hoy?";
            form2Element.textContent="Nombre";
            form3Element.textContent="Email";
            form4Element.textContent="Mensanje";
            form5Element.textContent="Enviar mensaje";
            trabajoElement.textContent="Mis trabajos más recientes";
            card1Element.textContent="Naraconstruc es una empresa que se presenta como una organización socialmente responsable que aporta al éxito de los proyectos de sus clientes a través de la utilización eficiente de sus recursos y con una clara conciencia social y ambiental que contribuye al bienestar económico del país.";
            card2Element.textContent="Naranjo Jurídico es una unidad de negocio perteneciente al Holding JL Naranjo que brinda sus servicios con sede en Guayaquil-Ecuador. Su equipo altamente cualificado de profesionales brinda asesoramiento legal y representación en litigios en áreas de derechos societarios, civiles, notariales, tributarios, intelectuales y administrativos.";
            card3Element.textContent="Royal Academy Express es una academia centrada en actividades que permitan la transformación real de emprendedores, empresas y negocios, buscando la implementación de metodologías que propicien la innovación y la mejora de la rentabilidad.";
            card4Element.textContent="Gerente Cyber Express es una unidad estratégica de negocios encargada de la ejecución, constitución y venta de franquicias comerciales debidamente estructuradas.";
            card5Element.textContent="Royal Bakana es una inmobiliaria especializada en ayudar a sus clientes a encontrar las opciones de inversión más adecuadas para sus necesidades e intereses en el mercado inmobiliario";
            card6Element.textContent="";
        }
    }

    function guardarIdiomaActual(idioma) {
        // Almacenar la preferencia de idioma en localStorage
        localStorage.setItem('idioma', idioma);
    }
});
