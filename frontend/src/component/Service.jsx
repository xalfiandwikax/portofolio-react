export default function Service() {

    const services = [
        {
            title: "Internet Provider",
            description:
                "Layanan Internet Dedicated dan Broadband melalui Fiber Optic maupun Wireless.",
            icon: "fa-wifi",
            color: "text-blue-600",
            image:
                "https://lh3.googleusercontent.com/d/1zeISIX1YS571lIJY7prju-hP0xbCWAKD",
        },

        {
            title: "Managed Service",
            description:
                "Pengelolaan sistem jaringan penuh oleh tim NOC kami.",
            icon: "fa-server",
            color: "text-green-600",
            image:
                "https://lh3.googleusercontent.com/d/1nvzXATwbdna53PV77pR_Tdpw8DWFhsZ_",
        },

        {
            title: "Instalasi Jaringan",
            description:
                "Instalasi Microwave Link, Tower GSM, dan CCTV.",
            icon: "fa-tower-cell",
            color: "text-orange-500",
            image:
                "https://lh3.googleusercontent.com/d/1Qobwdt9UYbeHt3i2kGeJlVeRNIJAdj6R",
        },
    ];

    const openModal = (modal) => {
        console.log("Open:", modal);
    };



    return (
        <section
            id="layanan"
            className="py-16 lg:py-24 bg-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">

                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
                    Lingkup Layanan
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-12">
                    Infrastruktur & Solusi Jaringan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg"
                        >

                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-8">

                                <i className={`fa-solid ${service.icon} text-3xl ${service.color}`}></i>

                                <h3 className="text-2xl font-bold mt-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    {service.description}
                                </p>

                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    );
}