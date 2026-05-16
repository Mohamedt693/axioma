import { Metadata } from "next";
import ServicesClient from "@/components/client/ServicesClient";

export const metadata: Metadata = {
    title: "Our Services | Axioma Studio",
    description: "Explore our architectural design expertise, high-end interior concepts, and future-forward urban blueprinting.",
    openGraph: {
        title: "Axioma Studio Architectural Services",
        description: "Crafting timeless structures, detailing the inner void, and blueprinting the future.",
        images: ["/architecture.jpg"],
    },
};

const servicesData = [
    {
        id: "01",
        title: "Architecture",
        img: "/architecture.jpg",
        desc: "Crafting timeless structures."
    },
    {
        id: "02",
        title: "Interior",
        img: "/interior.jpg",
        desc: "Detailing the inner void."
    },
    {
        id: "03",
        title: "Urban",
        img: "/urban.jpg",
        desc: "Blueprinting the future."
    }
];

export default function ServicesPage() {
    return (
        <div className="w-full h-full bg-black p-4 md:p-10 overflow-hidden rounded-4xl">
            <ServicesClient services={servicesData} />
        </div>
    );
}