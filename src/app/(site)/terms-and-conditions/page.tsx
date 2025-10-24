import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Conditions | Webzyra",
};

export default function Page() {
    return (
        <section>
            <div
                className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
            >
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            Terms & Conditions
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                            <p>
                                These Terms and Conditions ("<span className="font-semibold">Agreement</span>") govern the use of services provided by Webzyra ("<span className="font-semibold">Webzyra</span>", "we", "us", "our") to clients ("<span className="font-semibold">Client</span>", "you", "your"). By engaging our services, you agree to be bound by these terms.
                            </p>
                            <p className="mt-5">
                                Webzyra may modify this Agreement from time to time. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                            </p>
                            <div className="my-6">
                                <h4 className="font-semibold">1. Services</h4>
                                <ul className="mt-6">
                                    <li>
                                        <p>
                                            <span className="font-semibold">1.1 Web Development:</span>
                                            Webzyra provides custom website development, e-commerce solutions, and web application development services.
                                        </p>
                                    </li>
                                    <li className="mt-5">
                                        <p>
                                            <span className="font-semibold">1.2 Digital Marketing:</span>
                                            We offer SEO services, social media marketing, content marketing, and digital advertising solutions.
                                        </p>
                                    </li>
                                    <li className="mt-5">
                                        <p><span className="font-semibold">1.3 Design Services:</span>
                                            UI/UX design, logo design, branding, and graphic design services are provided as part of our comprehensive offerings.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <h4 className="font-semibold">2. Payment Terms</h4>
                                <ul className="mt-6">
                                    <li>
                                        <p>
                                            <span className="font-semibold">2.1 Payment Schedule:</span>
                                            Payment terms will be specified in the project proposal or service agreement. Generally, a 50% advance payment is required to commence work.
                                        </p>
                                    </li>
                                    <li className="mt-5">
                                        <p>
                                            <span className="font-semibold">2.2 Late Payments:</span>
                                            Late payments may result in project delays or suspension of services until payment is received.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <h4 className="font-semibold">3. Intellectual Property</h4>
                                <ul className="mt-6">
                                    <li>
                                        <p>
                                            <span className="font-semibold">3.1 Client Content:</span>
                                            All content, materials, and information provided by the client remain the property of the client.
                                        </p>
                                    </li>
                                    <li className="mt-5">
                                        <p>
                                            <span className="font-semibold">3.2 Developed Work:</span>
                                            Upon full payment, the client will own the final deliverables. Webzyra retains the right to showcase completed work in our portfolio.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};