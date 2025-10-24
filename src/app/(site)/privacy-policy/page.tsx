import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Privacy Policy | Webzyra",
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
                            Privacy Policy
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                            <p className="text-opacity-60">
                                This Privacy Policy explains how Personal Information about our clients and visitors is collected, used and disclosed by Webzyra ("us", "we", "our" or "Webzyra"). This Privacy Policy describes our privacy practices in relation to the use of our website (
                                <Link href="https://webzyra.in/" className="text-dark_black">https://webzyra.in/</Link>), our web development services, digital marketing solutions, and related services offered by us (the "Services"), as well as your choices regarding use, access, and correction of Personal Information.</p>

                            <p className="text-opacity-60 mt-5">By using our Services and by agreeing to our Terms and Conditions, you agree to the collection, usage, storage and disclosure of information described in this Privacy Policy.</p>

                            <p className="text-opacity-60 mt-5">Our website may contain links to other websites or services; and information practices and/or the content of such other websites or services shall be governed by the privacy statements of such other websites or services.</p>

                            <p className="text-opacity-60 mt-5">We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and providing you with additional notifications. We encourage you to review the Privacy Policy whenever you use our Services to stay informed about our information practices.</p>

                            <div className="my-6">
                                <h4 className="font-semibold">Information We Collect</h4>
                                <p className="mt-6">
                                    When you contact us for web development services or digital marketing solutions, we may collect information such as your name, email address, phone number, company name, project requirements, and any other information you choose to provide through our contact forms or direct communication.
                                </p>

                                <p className="mt-6 text-opacity-60">
                                    We collect this information to provide you with our services, respond to your inquiries, and communicate about your projects. We may also collect technical information about your website usage through cookies and analytics tools to improve our services.
                                </p>

                            </div>
                            <div className="my-6">
                                <h4 className="font-semibold">How We Use Your Information</h4>
                                <p className="mt-6 text-opacity-60">
                                    We use the information we collect to provide web development services, digital marketing solutions, respond to your inquiries, send project updates, and improve our services. We may also use your information to send you relevant marketing communications about our services, which you can opt out of at any time.
                                </p>
                                <p className="mt-6 text-opacity-60">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.
                                </p>
                            </div>
                            <div className="my-6">
                                <h4 className="font-semibold">Contact Information</h4>
                                <p className="mt-6 text-opacity-60">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="mt-3 text-opacity-60">
                                    Email: <Link href="mailto:webzyra1@gmail.com" className="text-dark_black">webzyra1@gmail.com</Link><br/>
                                    Phone: <Link href="tel:8638703614" className="text-dark_black">+91 8638703614</Link><br/>
                                    Address: Silchar, Assam, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};